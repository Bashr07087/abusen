function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const issue = document.getElementById('issue').value.trim();

    if (!name || !phone) {
        alert('Please fill in your name and phone number.');
        return;
    }

    alert(`Thank you, ${name}! Your repair request has been submitted. We'll contact you at ${phone} soon.`);
    event.target.reset();
}

// Smooth scrolling for links with class 'smooth-scroll'
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        const menuToggle = document.getElementById('menu-toggle');
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Portfolio image click handler
document.querySelectorAll('.portfolio-image').forEach(image => {
    image.addEventListener('click', function () {
        const altText = this.getAttribute('alt');
        alert(`Viewing ${altText} project. Contact us for similar repair services!`);
    });
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});