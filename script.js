window.addEventListener('load', (event) => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Get all section content elements
    const sectionContents = document.querySelectorAll('.section-content');

    // Initially hide all sections except the first one
    sectionContents.forEach((content, index) => {
        content.style.display = index === 0 ? 'block' : 'none';
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
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        });
    });
});
