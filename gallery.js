document.addEventListener("DOMContentLoaded", function() {
  
  // Create Modal Structure
  const modal = document.createElement('div');
  modal.id = 'gallery-modal';
  modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10000;
  `;
  closeBtn.onclick = closeModal;

  const modalContent = document.createElement('img');
  modalContent.id = 'modal-image';
  modalContent.style.cssText = `
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 80vh;
    border-radius: 5px;
    animation: zoom 0.6s;
  `;

  const captionText = document.createElement('div');
  captionText.id = 'caption';
  captionText.style.cssText = `
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    font-size: 1.2rem;
  `;

  const navContainer = document.createElement('div');
  navContainer.style.cssText = `
    display: flex;
    gap: 20px;
    margin-top: 15px;
  `;

  const prevBtn = document.createElement('button');
  prevBtn.innerText = '❮ Prev';
  prevBtn.style.cssText = `
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  `;
  
  const nextBtn = document.createElement('button');
  nextBtn.innerText = 'Next ❯';
  nextBtn.style.cssText = `
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  `;

  navContainer.appendChild(prevBtn);
  navContainer.appendChild(nextBtn);

  modal.appendChild(closeBtn);
  modal.appendChild(modalContent);
  modal.appendChild(captionText);
  modal.appendChild(navContainer);
  document.body.appendChild(modal);

  // Gallery Logic
  let currentImages = [];
  let currentIndex = 0;
  let currentTitle = '';

  // Use Event Delegation to handle clicks on [data-gallery-item]
  document.addEventListener('click', function(e) {
    const target = e.target.closest('[data-gallery-item]');
    if (target) {
      // Prevent default behavior if it's a link or button
      e.preventDefault(); 
      e.stopPropagation(); // Stop propagation to prevent card flip

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
    captionText.innerText = title ? `${title} (${currentIndex + 1}/${currentImages.length})` : '';
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function showImage(index) {
    if (index >= currentImages.length) currentIndex = 0;
    else if (index < 0) currentIndex = currentImages.length - 1;
    else currentIndex = index;

    modalContent.src = currentImages[currentIndex];
    captionText.innerText = currentTitle ? `${currentTitle} (${currentIndex + 1}/${currentImages.length})` : '';
  }

  nextBtn.onclick = function(e) {
    e.stopPropagation();
    showImage(currentIndex + 1);
  };

  prevBtn.onclick = function(e) {
    e.stopPropagation();
    showImage(currentIndex - 1);
  };

  // Close on outside click
  modal.onclick = function(e) {
    if (e.target === modal) {
      closeModal();
    }
  };

  // Keyboard support
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === "flex") {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    }
  });

  // Add Animation CSS
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes zoom {
      from {transform:scale(0)} 
      to {transform:scale(1)}
    }
  `;
  document.head.appendChild(style);

});
