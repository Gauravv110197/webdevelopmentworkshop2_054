// Experiment-1 JavaScript Setup
// Add your JavaScript code here

// Example: Initialize Bootstrap components if needed
document.addEventListener('DOMContentLoaded', function() {
    console.log('Experiment-1 loaded');
    
    // Bootstrap tooltip initialization (if you use tooltips)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Add your custom functions below
