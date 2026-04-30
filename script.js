const navbarSheetTrigger = document.getElementById("navbar__sheet-trigger");
const navbarNavigation = document.getElementById("navbar__navigation");
const navLinks = document.querySelectorAll(".navbar__link");

if (navbarSheetTrigger && navbarNavigation) {
  navbarSheetTrigger.addEventListener("click", () => {
    navbarNavigation.classList.toggle("active");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarNavigation) {
      navbarNavigation.classList.remove("active");
    }
  });
});

const tabButtons = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

function activateTab(tabName) {
  tabButtons.forEach((item) => {
    item.dataset.active = item.dataset.tab === tabName ? "true" : "false";
  });

  tabContents.forEach((item) => {
    item.dataset.active = item.dataset.tab === tabName ? "true" : "false";
  });
}

tabButtons.forEach((item) => {
  item.addEventListener("click", () => {
    activateTab(item.dataset.tab);
  });
});

const contactForm = document.getElementById("contact-form");
const feedbackElement = document.getElementById("form-feedback");

if (contactForm && feedbackElement) {
  contactForm.addEventListener("submit", (event) => {
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const comments = contactForm.comments.value.trim();

    feedbackElement.className = "form-feedback";

    if (!name || !email || !comments) {
      event.preventDefault();
      feedbackElement.textContent = "Please fill in your name, email, and comments.";
      feedbackElement.classList.add("error");
      return;
    }

    if (!isValidEmail(email)) {
      event.preventDefault();
      feedbackElement.textContent = "Please enter a valid email address.";
      feedbackElement.classList.add("error");
    }
  });
}

function isValidEmail(email) {
  return /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i.test(
    email
  );
}

document.querySelectorAll(".footer-year").forEach((item) => {
  item.textContent = new Date().getFullYear();
});
