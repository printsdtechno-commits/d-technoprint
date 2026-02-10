document.addEventListener("DOMContentLoaded", function() {
  
  // Create Modal Structure
  const modal = document.createElement('div');
  modal.id = 'gallery-modal';
  modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 999999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    height: 100dvh;
    overflow: hidden;
    background-color: rgba(0,0,0,0.95);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    touch-action: none;
  `;

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position: absolute;
    top: max(20px, env(safe-area-inset-top));
    right: max(20px, env(safe-area-inset-right));
    color: #fff;
    font-size: 40px;
    font-weight: 300;
    cursor: pointer;
    z-index: 1000001;
    line-height: 1;
    transition: 0.3s;
    padding: 10px;
    background: rgba(0,0,0,0.2);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  closeBtn.onmouseover = () => { closeBtn.style.color = "#bbb"; closeBtn.style.background = "rgba(0,0,0,0.5)"; };
  closeBtn.onmouseout = () => { closeBtn.style.color = "#fff"; closeBtn.style.background = "rgba(0,0,0,0.2)"; };
  closeBtn.onclick = closeModal;

  const modalContent = document.createElement('img');
  modalContent.id = 'modal-image';
  modalContent.style.cssText = `
    display: block;
    max-width: 95%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    animation: zoom 0.4s ease-out;
  `;

  const captionText = document.createElement('div');
  captionText.id = 'caption';
  captionText.style.cssText = `
    margin-top: 15px;
    width: 90%;
    text-align: center;
    color: #f1f1f1;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  `;

  // Create Navigation Arrows
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '&#10094;'; // Left angle quote
  prevBtn.style.cssText = `
    position: absolute;
    top: 50%;
    left: max(20px, env(safe-area-inset-left));
    transform: translateY(-50%);
    background: rgba(0,0,0,0.2);
    border: none;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
    z-index: 1000001;
    padding: 0;
    transition: 0.3s;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  prevBtn.onmouseover = () => { prevBtn.style.color = "#bbb"; prevBtn.style.background = "rgba(0,0,0,0.5)"; };
  prevBtn.onmouseout = () => { prevBtn.style.color = "#fff"; prevBtn.style.background = "rgba(0,0,0,0.2)"; };

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&#10095;'; // Right angle quote
  nextBtn.style.cssText = `
    position: absolute;
    top: 50%;
    right: max(20px, env(safe-area-inset-right));
    transform: translateY(-50%);
    background: rgba(0,0,0,0.2);
    border: none;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
    z-index: 1000001;
    padding: 0;
    transition: 0.3s;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  nextBtn.onmouseover = () => { nextBtn.style.color = "#bbb"; nextBtn.style.background = "rgba(0,0,0,0.5)"; };
  nextBtn.onmouseout = () => { nextBtn.style.color = "#fff"; nextBtn.style.background = "rgba(0,0,0,0.2)"; };

  // Append elements directly to modal
  modal.appendChild(closeBtn);
  modal.appendChild(prevBtn);
  modal.appendChild(modalContent);
  modal.appendChild(nextBtn);
  modal.appendChild(captionText);
  document.body.appendChild(modal);

  // Gallery Logic
  let currentImages = [];
  let currentIndex = 0;
  let currentTitle = '';

  document.addEventListener('click', function(e) {
    const target = e.target.closest('[data-gallery-item]');
    if (target) {
      e.preventDefault(); 
      e.stopPropagation();

      const title = target.getAttribute('data-title');
      const logosStr = target.getAttribute('data-logos');
      
      if (!logosStr) return;

      currentImages = logosStr.split(',').map(s => s.trim());
      currentIndex = 0;
      currentTitle = title || '';

      if (currentImages.length > 0) {
        openModal(currentImages[0], currentTitle);
      }
    }
  });

  function openModal(imgSrc, title) {
    modal.style.display = "flex";
    modalContent.src = imgSrc;
    updateCaption();
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function updateCaption() {
    captionText.innerText = currentTitle ? `${currentTitle} (${currentIndex + 1}/${currentImages.length})` : '';
  }

  function showImage(index) {
    if (index >= currentImages.length) currentIndex = 0;
    else if (index < 0) currentIndex = currentImages.length - 1;
    else currentIndex = index;

    modalContent.src = currentImages[currentIndex];
    updateCaption();
  }

  nextBtn.onclick = function(e) {
    e.stopPropagation();
    showImage(currentIndex + 1);
  };

  prevBtn.onclick = function(e) {
    e.stopPropagation();
    showImage(currentIndex - 1);
  };

  modal.onclick = function(e) {
    if (e.target === modal) {
      closeModal();
    }
  };

  document.addEventListener('keydown', function(e) {
    if (modal.style.display === "flex") {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    }
  });

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes zoom {
      from {transform:scale(0.8); opacity: 0;} 
      to {transform:scale(1); opacity: 1;}
    }
    /* Mobile adjustments */
    @media (max-width: 768px) {
      #modal-image { max-width: 100%; max-height: 75vh; }
      #caption { font-size: 0.95rem; width: 95%; margin-top: 10px; }
      #gallery-modal button { 
        font-size: 24px !important; 
        width: 40px !important;
        height: 40px !important;
        padding: 0 !important;
      }
      /* Adjust close button position for mobile */
      #gallery-modal span {
        font-size: 30px !important;
        width: 40px !important;
        height: 40px !important;
        padding: 0 !important;
      }
    }
  `;
  document.head.appendChild(style);

});
