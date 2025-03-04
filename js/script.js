document.addEventListener("DOMContentLoaded", function () {
const menuToggle = document.querySelector(".mobile-header__menu");
const mobileNav = document.querySelector(".mobile-header__nav");
const mobileSearch = document.querySelector(".mobile-header__search-body");
const mobileSearchBtn = document.querySelector(".mobile-header__search-btn");
const mobileSearchCloseBtn = document.querySelector(
  ".mobile-header__search-close",
);
const mobileSearchContent = document.querySelector(".mobile-header__content");
const mobileLogo = document.querySelector(".mobile-header__logo");
const mobileTitle = document.querySelector(".mobile-header__title");
const body = document.body;

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("open");
    mobileNav.classList.toggle("open");

    if (mobileSearch.classList.contains("open")) {
      mobileSearch.classList.remove("open");
    }

    if (mobileNav.classList.contains("open")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  });
}

if (mobileSearchBtn) {
  mobileSearchBtn.addEventListener("click", function () {
    mobileSearch.classList.add("open");
    mobileLogo.classList.add("hidden");
    menuToggle.classList.add("hidden");
    mobileTitle.classList.add("hidden");
    mobileSearchBtn.classList.add("hidden");
    mobileSearchCloseBtn.classList.remove("hidden");
    mobileSearchContent.classList.add("w-100");
  });
}

if (mobileSearchCloseBtn) {
  mobileSearchCloseBtn.addEventListener("click", function () {
    mobileSearch.classList.remove("open");
    mobileLogo.classList.remove("hidden");
    menuToggle.classList.remove("hidden");
    mobileTitle.classList.remove("hidden");
    mobileSearchBtn.classList.remove("hidden");
    mobileSearchCloseBtn.classList.add("hidden");
    mobileSearchContent.classList.remove("w-100");
  });
}

const scrollToTopButton = document.getElementById("scroll-to-top");

if (scrollToTopButton) {
  window.onscroll = function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

const clearIcon = document.querySelector("#clear-icon");
const searchInput = document.querySelector("#search-input");

if (clearIcon && searchInput) {
  clearIcon.addEventListener("click", () => {
    searchInput.value = "";
    clearIcon.classList.add("hidden");
  });

  searchInput.addEventListener("input", () => {
    if (searchInput.value.length > 0) {
      clearIcon.classList.remove("hidden");
    } else {
      clearIcon.classList.add("hidden");
    }
  });
}

});