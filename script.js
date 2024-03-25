// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all section content elements
const sectionContents = document.querySelectorAll('.section-content');

// Hide all section contents except the first one
sectionContents.forEach((content, index) => {
    if (index !== 0) {
        content.style.display = 'none';
    } else {
        content.classList.add('active');
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

        // Hide all section contents
        sectionContents.forEach(content => {
            content.classList.remove('active');
            setTimeout(() => {
                content.style.display = 'none';
            }, 500);
        });

        // Show the selected section content
        const selectedSection = document.getElementById(sectionId);
        const selectedContent = selectedSection.querySelector('.section-content');
        setTimeout(() => {
            selectedContent.style.display = 'block';
            setTimeout(() => {
                selectedContent.classList.add('active');
            }, 50);
        }, 500);
    });
});