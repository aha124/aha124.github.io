// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all section elements
const sections = document.querySelectorAll('section');

// Function to hide all sections
function hideSections() {
  sections.forEach(s => {
    s.classList.remove('active');
    // We don't need to set display none here immediately, the transition will handle the fade
  });
}

// Function to show a section with the fade effect
function showSection(section) {
    // Hide all sections first
    hideSections();

    // Wait for the fade out to complete before showing the new section
    setTimeout(() => {
        // Ensure that the section is ready to be faded in
        section.style.display = 'block';
        // Trigger the fade in by adding the 'active' class
        setTimeout(() => section.classList.add('active'), 10); // Small timeout to ensure the display change has taken effect
    }, 500); // This should match the CSS transition time
}

// Initialize sections to hidden, except for the first one
sections.forEach((section, index) => {
    section.style.display = 'none';
    if (index === 0) {
        section.style.display = 'block';
        setTimeout(() => section.classList.add('active'), 10); // Small delay to ensure the display change has taken effect
    }
});

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
