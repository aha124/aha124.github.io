// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all section elements
const sections = document.querySelectorAll('section');

// Hide all sections except the first one
sections.forEach((section, index) => {
    if (index !== 0) {
        section.style.display = 'none';
    }
});

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        selectedSection.style.display = 'block';
        
        // Remove 'active' class from all navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add 'active' class to the clicked navigation link
        link.classList.add('active');
    });
});