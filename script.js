// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all section elements
const sections = document.querySelectorAll('section');

// Initialize sections to hidden
sections.forEach((section, index) => {
    section.style.display = 'none';
    if (index === 0) {
        section.style.display = 'block';
        setTimeout(() => section.classList.add('active'), 0); // Allow for initial fade-in
    }
});

// Function to handle showing a section
function showSection(section) {
    // Hide all sections
    sections.forEach(s => {
        s.classList.remove('active');
        setTimeout(() => s.style.display = 'none', 500); // Wait for fade-out before hiding
    });

    // Show the selected section
    section.style.display = 'block';
    setTimeout(() => section.classList.add('active'), 0); // Wait for display to change before fading in
}

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');

        // Hide all sections and then show the selected section
        const selectedSection = document.getElementById(sectionId);
        showSection(selectedSection);

        // Update active link
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        link.classList.add('active');
    });
});
