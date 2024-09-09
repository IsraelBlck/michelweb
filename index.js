const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle hamburger and nav menu active class on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Remove active class from hamburger and nav menu on link click
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Add active class to clicked nav link and remove from others
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Show the form when 'Drop us a line' is clicked
document.getElementById('dropLineButton').addEventListener('click', function() {
    document.getElementById('contactFormSection').style.display = 'block';
    window.scrollTo(0, document.getElementById('contactFormSection').offsetTop);
  });
  
  // Hide the form when 'Cancel' is clicked
  document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('contactFormSection').style.display = 'none';
  });
  
  // Track and show the number of attachments added
  document.getElementById('attachment').addEventListener('change', function() {
    const fileCount = this.files.length;
    const countText = fileCount === 0 ? 'No attachments added' : `${fileCount} attachment(s) added`;
    document.getElementById('attachmentCount').textContent = countText;
  });
  document.getElementById('drop-a-line-btn').addEventListener('click', function() {
    // Hide the "Drop us a line" button
    this.style.display = 'none';
  
    // Show the form section
    document.getElementById('form-section').style.display = 'block';
  });

