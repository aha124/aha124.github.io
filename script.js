document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const gridContainer = document.querySelector('#main-content');

    function hideSections() {
        sections.forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active');
        });
    }

    function showSection(section) {
        section.style.display = 'block';
        setTimeout(() => section.classList.add('active'), 10);
    }

    // Initialize: hide all sections
    hideSections();

    // Handle grid container links for sections
    document.querySelectorAll('.grid-container a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');

            hideSections();
            const selectedSection = document.querySelector(sectionId);
            showSection(selectedSection);

            gridContainer.style.display = 'none'; // Hide the grid container
        });
    });

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            hideSections();
            const selectedSection = document.getElementById(sectionId);
            showSection(selectedSection);

            // Do not hide the grid container here as it's already hidden
        });
    });
});
