tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b192c",
          light: "#1e2e45",
          dark: "#050c17",
        },
        gold: {
          DEFAULT: "#c5a059",
          hover: "#b08b46",
          light: "#e8d4a6",
        },
        slate: {
          custom: "#4a5568",
          light: "#f8f9fa",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
};

// Toggle Mobile Menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});

// Handle contact form submission modal-style feedback without alert()
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create temporary inline notification
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerText;

  submitBtn.innerText = "Enviando...";
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.innerText = "✓ Mensaje Enviado Con Éxito";
    submitBtn.classList.remove("bg-navy");
    submitBtn.classList.add("bg-emerald-700", "text-white");
    contactForm.reset();

    setTimeout(() => {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      submitBtn.classList.remove("bg-emerald-700", "text-white");
      submitBtn.classList.add("bg-navy");
    }, 4000);
  }, 1000);
});

// Header shadow on scroll
const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shadow-2xl", "bg-navy");
  } else {
    header.classList.remove("shadow-2xl");
  }
});

const intersectionCallback = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      let animation = entry.target.getAttribute("data-animation");
      let delay = entry.target.getAttribute("data-delay");
      entry.target.classList.add(animation);
      delay && entry.target.classList.add("animate__delay-" + delay + "s");
    }
  }
};

const observer = new IntersectionObserver(intersectionCallback);

const items = document.querySelectorAll(".animate__animated");

for (const item of items) {
  observer.observe(item);
}

const nav = document.getElementById("navbar");

window.addEventListener("scroll", () =>
  window.scrollY >= 150
    ? nav.classList.remove("py-3")
    : nav.classList.add("py-3"),
);
