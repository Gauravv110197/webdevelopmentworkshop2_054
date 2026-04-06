// Experiment-1 JavaScript Setup
// Enhanced with form validation, modals, and interactivity

document.addEventListener('DOMContentLoaded', function() {
    console.log('Experiment-1 loaded with enhanced features');
    
    // Initialize Bootstrap components
    initializeBootstrap();
    
    // Set up form handling
    setupContactForm();
    
    // Smooth scrolling for anchor links
    setupSmoothScrolling();
});

// Initialize Bootstrap components (tooltips, popovers, etc.)
function initializeBootstrap() {
    // Tooltip initialization
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    console.log('Bootstrap components initialized');
}

// Set up contact form validation and submission
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            
            // Validate form
            if (!validateForm(name, email, subject, message)) {
                showMessage('Please fill all fields correctly', 'danger');
                return;
            }
            
            // Validate email format
            if (!validateEmail(email)) {
                showMessage('Please enter a valid email address', 'danger');
                return;
            }
            
            // Show success message (in real app, would send to server)
            showMessage('✓ Message sent successfully! We will get back to you soon.', 'success');
            
            // Log form data (in real app, would send to backend)
            console.log('Form submitted:', { name, email, subject, message });
            
            // Reset form
            form.reset();
        });
    }
}

// Validate form fields
function validateForm(name, email, subject, message) {
    if (!name || name.length < 2) {
        return false;
    }
    if (!email || email.length < 5) {
        return false;
    }
    if (!subject || subject.length < 3) {
        return false;
    }
    if (!message || message.length < 10) {
        return false;
    }
    return true;
}

// Validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message (success or error)
function showMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${text}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a data-bs-toggle element (for modals/dropdowns)
            if (this.getAttribute('data-bs-toggle')) {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('Smooth scrolling enabled');
}

// Utility function to add active class to navigation items
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });
}

