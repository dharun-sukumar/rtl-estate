// RTL Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const rtlToggle = document.querySelector('.rtl-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved RTL preference
    const savedDirection = localStorage.getItem('textDirection');
    if (savedDirection) {
        htmlElement.setAttribute('dir', savedDirection);
        updateToggleText(savedDirection);
    }
    
    // RTL Toggle Event Listener
    if (rtlToggle) {
        rtlToggle.addEventListener('click', function() {
            const currentDirection = htmlElement.getAttribute('dir');
            const newDirection = currentDirection === 'rtl' ? 'ltr' : 'rtl';
            
            // Set new direction
            htmlElement.setAttribute('dir', newDirection);
            
            // Save preference
            localStorage.setItem('textDirection', newDirection);
            
            // Update button text
            updateToggleText(newDirection);
            
            // Add transition effect
            document.body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
    
    function updateToggleText(direction) {
        if (rtlToggle) {
            rtlToggle.innerHTML = '<i class="fas fa-globe"></i>';
            rtlToggle.setAttribute('aria-label', `Switch to ${direction === 'rtl' ? 'left-to-right' : 'right-to-left'} text direction`);
        }
    }
    
    // Initialize button text
    const initialDirection = htmlElement.getAttribute('dir') || 'ltr';
    updateToggleText(initialDirection);
});

// RTL-specific styling adjustments
const rtlStyles = `
[dir="rtl"] .hero {
    text-align: right;
}

[dir="rtl"] .property-features {
    justify-content: flex-end;
}

[dir="rtl"] .navbar-nav {
    margin-left: 0;
    margin-right: auto;
}

[dir="rtl"] .property-location::before {
    margin-left: 0.5rem;
    margin-right: 0;
}

[dir="rtl"] .home-switcher {
    left: 20px;
    right: auto;
}

[dir="rtl"] .dashboard-sidebar {
    order: 2;
}

[dir="rtl"] .dashboard-content {
    order: 1;
}

[dir="rtl"] .footer-content {
    text-align: right;
}

[dir="rtl"] .navbar-brand {
    margin-left: auto;
    margin-right: 0;
}

[dir="rtl"] .rtl-toggle {
    margin-right: 1rem;
    margin-left: 1rem;
}

@media (max-width: 768px) {
    [dir="rtl"] .home-switcher {
        left: 10px;
        right: auto;
    }
    
    [dir="rtl"] .rtl-toggle {
        margin-right: 0.5rem;
        margin-left: 1rem;
    }
}
`;

// Inject RTL styles
const rtlStyleSheet = document.createElement('style');
rtlStyleSheet.textContent = rtlStyles;
document.head.appendChild(rtlStyleSheet);