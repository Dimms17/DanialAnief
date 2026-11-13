document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Reveal Animations (Repeats on scroll up and down)
    const revealElements = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is on screen: morph it in
                entry.target.classList.add("active");
            } else {
                // Element left the screen: reset it to the hidden state
                entry.target.classList.remove("active");
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

// 2. WhatsApp API Integration
function openWhatsApp() {
    const phoneNumber = "60123456789"; 
    const rawMessage = "Hello, I am reaching out to inquire about your legal services. I would like to schedule a consultation.";
    const encodedMessage = encodeURIComponent(rawMessage);
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// 3. Smooth Header Gliding Effect
let lastScrollY = window.scrollY;
const header = document.querySelector(".hero-header");

window.addEventListener("scroll", () => {
    // Only trigger the hiding effect after scrolling down a little bit (50px)
    if (window.scrollY > 50) { 
        if (window.scrollY > lastScrollY) {
            // Scrolling down: gracefully slide it up
            header.classList.add("hide");
        } else {
            // Scrolling up: gracefully slide it back down
            header.classList.remove("hide");
        }
    } else {
        // Always show the header if we are at the very top of the page
        header.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});

// 4. Mobile Hamburger Menu Toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Swap icon between bars and 'X' close
        const icon = hamburgerBtn.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Close menu automatically when clicking any link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = hamburgerBtn.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });
}
});