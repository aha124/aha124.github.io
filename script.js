// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all section elements
const sections = document.querySelectorAll('section');

// Function to hide all sections
function hideSections() {
  sections.forEach(s => {
    s.style.display = 'none'; // Hide the section
    s.classList.remove('active');
  });
}

// Function to show a section with the fade effect
function showSection(section) {
    // Ensure that the section is ready to be faded in
    section.style.display = 'block';
    // Trigger the fade in by adding the 'active' class
    setTimeout(() => section.classList.add('active'), 10); // Small timeout to ensure the display change has taken effect
}

// Initialize sections to hidden, except for the first one (if needed)
hideSections();
sections[0].style.display = 'block'; // Remove this line if you don't want to show the first section by default
setTimeout(() => sections[0].classList.add('active'), 10);

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');

        // Hide all sections and then show the selected section
        const selectedSection = document.getElementById(sectionId);
        hideSections();
        showSection(selectedSection);

        // Update active link
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        link.classList.add('active');
    });
});

// Handle grid container links for sections
document.querySelectorAll('.grid-container a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');

        // Hide all sections and then show the selected section
        const selectedSection = document.querySelector(sectionId);
        hideSections();
        showSection(selectedSection);
    });
});
