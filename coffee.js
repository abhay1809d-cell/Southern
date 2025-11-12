document.addEventListener("DOMContentLoaded", () => {
    // Slide Controls
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        if (totalSlides === 0) return; // Prevent error if no slides
        slides.forEach(slide => slide.classList.remove("active"));
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].classList.add("active");
    }

    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
        prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));

        // Auto slide every 5 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    // Menu Category Filter
    const categoryBtns = document.querySelectorAll(".category-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    if (categoryBtns.length > 0 && menuItems.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                categoryBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const category = btn.dataset.category;
                menuItems.forEach(item => {
                    if (category === "all" || item.dataset.category === category) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener("click", function () {
            navLinks.style.display =
                navLinks.style.display === "flex" ? "none" : "flex";
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (!href || href === "#") return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Form Submission
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message! We will get back to you soon.");
            this.reset();
        });
    }

    // Header Scroll Effect
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.style.background = "rgba(255,255,255,0.98)";
                navbar.style.backdropFilter = "blur(20px)";
                navbar.style.boxShadow = "0 8px 40px rgba(0,0,0,0.15)";
            } else {
                navbar.style.background = "rgba(255,255,255,0.98)";
                navbar.style.backdropFilter = "blur(10px)";
                navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.1)";
            }
        });
    }
});

