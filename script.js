// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all section elements
const sections = document.querySelectorAll('section');

// Hide all sections except the first one
sections.forEach((section, index) => {
    if (index !== 0) {
        section.style.display = 'none';
    } else {
        section.classList.add('active');
    }
});

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');

        // Remove 'active' class from all navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked navigation link
        link.classList.add('active');

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
            setTimeout(() => {
                section.style.display = 'none';
            }, 500);
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        setTimeout(() => {
            selectedSection.style.display = 'block';
            setTimeout(() => {
                selectedSection.classList.add('active');
            }, 50);
        }, 500);
    });
});