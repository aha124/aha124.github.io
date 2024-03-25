// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all section content elements
const sectionContents = document.querySelectorAll('.section-content');

// Hide all section contents except the first one
sectionContents.forEach((content, index) => {
    if (index !== 0) {
        content.style.display = 'none';
    }
});

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');

        // Hide all section contents
        sectionContents.forEach(content => {
            content.style.display = 'none';
        });

        // Show the selected section content
        const selectedSection = document.getElementById(sectionId);
        const selectedContent = selectedSection.querySelector('.section-content');
        selectedContent.style.display = 'block';
    });
});