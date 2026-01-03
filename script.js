// Sticky Navigation
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Scroll Reveal Animation (using Intersection Observer)
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Select all cards and section titles to animate
const revealElements = document.querySelectorAll('.glass, .section-title, .skills-container, .hero-content');

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
  observer.observe(el);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Image Lightbox Modal Functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".modal-close");

// Get all images in project galleries
const galleryImages = document.querySelectorAll(".project-gallery img");

// Open modal when image is clicked
galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    modal.classList.add("active");
    modalImg.src = this.src;
    modalCaption.textContent = this.alt || "Project Screenshot";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  });
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // Restore scrolling
});

// Close modal when clicking outside the image
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
