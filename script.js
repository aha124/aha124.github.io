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

    // Handle section links in the 3D plane
    document.querySelectorAll('.section-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const sectionId = link.getAttribute('data-section');
            hideSections();
            const selectedSection = document.getElementById(sectionId);
            showSection(selectedSection);
            gridContainer.style.display = 'none';
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

    // Add rotation to the grid container
    let rotateY = 0;
    gridContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        rotateY += e.deltaY * 0.01;
        gridContainer.style.transform = `rotateY(${rotateY}deg)`;
    });
});