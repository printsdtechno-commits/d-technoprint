(function() {
  const { useState } = React;

  function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('submitting');
      
      try {
        if (!window.firebase) throw new Error("Firebase not initialized");
        // Check if config is set
        if (!firebase.apps.length) {
            if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey) {
                firebase.initializeApp(window.FIREBASE_CONFIG);
            } else {
                throw new Error("Missing Firebase Configuration");
            }
        }
        
        const db = firebase.firestore();
        await db.collection('quotes').add({
          ...formData,
          createdAt: new Date().toISOString()
        });
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } catch (err) {
        console.error("Firebase Error:", err);
        setStatus('error');
        if (err.message === "Missing Firebase Configuration" || err.code === "auth/api-key-not-valid-please-pass-a-valid-api-key") {
             setErrorMessage("Configuration Error: Please add your Firebase API keys in contact.html");
        } else {
             setErrorMessage("Unable to send. Please check your internet connection or use WhatsApp.");
        }
      }
    };

    if (status === 'success') {
      return React.createElement('div', { className: 'alert alert-success', style: { padding: '2rem', textAlign: 'center', background: '#d4edda', color: '#155724', borderRadius: '8px' } }, 
        React.createElement('h4', null, 'Thank you!'),
        React.createElement('p', null, 'Your quote request has been received. We will contact you shortly.'),
        React.createElement('button', { className: 'btn btn-primary', onClick: () => setStatus('idle'), style: { marginTop: '1rem' } }, 'Send another')
      );
    }

    return React.createElement('form', { className: 'quote-form', onSubmit: handleSubmit },
      React.createElement('div', { className: 'form-grid' },
        // Name
        React.createElement('div', { className: 'form-field' },
          React.createElement('label', { htmlFor: 'name' }, 'Name'),
          React.createElement('input', { id: 'name', name: 'name', type: 'text', required: true, value: formData.name, onChange: handleChange })
        ),
        // Phone
        React.createElement('div', { className: 'form-field' },
          React.createElement('label', { htmlFor: 'phone' }, 'Phone'),
          React.createElement('input', { id: 'phone', name: 'phone', type: 'tel', required: true, value: formData.phone, onChange: handleChange })
        ),
        // Email
        React.createElement('div', { className: 'form-field' },
          React.createElement('label', { htmlFor: 'email' }, 'Email'),
          React.createElement('input', { id: 'email', name: 'email', type: 'email', required: true, value: formData.email, onChange: handleChange })
        ),
        // Service
        React.createElement('div', { className: 'form-field' },
          React.createElement('label', { htmlFor: 'service' }, 'Service Required'),
          React.createElement('select', { id: 'service', name: 'service', required: true, value: formData.service, onChange: handleChange },
            React.createElement('option', { value: '' }, 'Select a service'),
            ['Business Cards', 'Flyers & Brochures', 'Posters & Banners', 'Stamps & Seals', 'Name Badges', 'Promotional Items', 'Branding & Design'].map(s => 
              React.createElement('option', { key: s, value: s }, s)
            )
          )
        ),
        // Message
        React.createElement('div', { className: 'form-field form-full' },
          React.createElement('label', { htmlFor: 'message' }, 'Message'),
          React.createElement('textarea', { id: 'message', name: 'message', rows: 5, placeholder: 'Share quantities, sizes, deadlines', value: formData.message, onChange: handleChange })
        )
      ),
      React.createElement('div', { className: 'section-actions' },
        React.createElement('button', { className: 'btn btn-primary', type: 'submit', disabled: status === 'submitting' }, 
          status === 'submitting' ? 'Sending...' : 'Submit'
        ),
        React.createElement('a', { className: 'btn btn-outline', href: 'https://wa.me/971545741959', target: '_blank', rel: 'noopener' }, 'Contact on WhatsApp')
      ),
      status === 'error' && React.createElement('div', { className: 'error-msg', style: {color: 'red', marginTop: '1rem', textAlign: 'center'} }, 
        errorMessage || 'Unable to send. Please check your internet connection or use WhatsApp.'
      )
    );
  }

  const root = document.getElementById('contact-form-root');
  if (root) {
    const app = ReactDOM.createRoot(root);
    app.render(React.createElement(ContactForm));
  }
})();
