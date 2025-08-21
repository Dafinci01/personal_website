// Example JavaScript code to add interactivity
// You can modify and expand upon this as needed

// Smooth scrolling to section when clicking on navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Example code to show a simple alert when the contact form is submitted
document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();


    alert('Thank you for your message!');
});
