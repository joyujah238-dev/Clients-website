// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// =========================
// BOOKING FORM
// =========================

const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    // Check required fields
    if (name === "" || phone === "" || service === "" || date === "") {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.className = "error";
        return;
    }

    // Check name
    const namePattern = /^[A-Za-z\s'-]+$/;

    if (!namePattern.test(name)) {
        formMessage.textContent = "Please enter a valid name.";
        formMessage.className = "error";
        return;
    }

    // Check phone number
    const phonePattern = /^[0-9+\-\s()]{7,15}$/;

    if (!phonePattern.test(phone)) {
        formMessage.textContent = "Please enter a valid phone number.";
        formMessage.className = "error";
        return;
    }

    // Successful submission
    formMessage.textContent =
        "Thank you! Your appointment request has been received.";

    formMessage.className = "success";

    bookingForm.reset();
});


// =========================
// DATE VALIDATION
// =========================

const dateInput = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];

dateInput.min = today;


// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.style.display = "flex";
    });
});


// Close with the X button

lightboxClose.addEventListener("click", function () {
    lightbox.style.display = "none";
});


// Close by clicking the dark background

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});


// Close with Escape key

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});
