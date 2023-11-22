document.addEventListener("DOMContentLoaded", function () {
  let menuBtn = document.querySelector(".menu-btn .fa-bars");
  let navbarNav = document.querySelector(".navbar__nav");

  // Active menu links
  let navLink = document.querySelectorAll(".nav-links");
  navLink.forEach((item) =>
    item.addEventListener("click", () => {
      [...navLink].forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.toggle("active");
    })
  );

  // Active menu remonsive
  let navbar = document.querySelector(".navbar");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times");
    navbarNav.classList.toggle("active");
    // Remove search overlay
    searchOverlay.classList.remove("active");
  });

  // Remove active links menu
  navLink.forEach((item) =>
    item.addEventListener("click", function () {
      // console.log("click");
      menuBtn.classList.remove("fa-times");
      navbarNav.classList.remove("active");
    })
  );

  // Remove click DOM
  document.addEventListener("click", function (e) {
    // Remove menu btn in DOM reponsive
    if (!menuBtn.contains(e.target)) {
      navbarNav.classList.remove("active");
      menuBtn.classList.remove("fa-times");
    }
  });

  // Show hide search overlay
  let searchIcon = document.querySelector(".search-box");
  let searchOverlay = document.querySelector(".search__overlay");
  let searchClose = document.querySelector(".search__overlay--close");
  searchIcon.addEventListener("click", function () {
    searchOverlay.classList.add("active");
  });
  // Remove search close
  searchClose.addEventListener("click", function () {
    searchOverlay.classList.remove("active");
  });

  // Show hide modal dialog
  let modalDialog = document.querySelector(".modal__dialog");
  let modalContent = document.querySelector(".modal-content");
  let iconDialog = document.querySelector(".menu__icon-dialog");
  let close = document.querySelector(".button__dialog-close");
  // Add modal dialog
  iconDialog.addEventListener("click", () => {
    modalContent.classList.add("active");
    modalDialog.classList.add("active");
    searchOverlay.classList.remove("active");
  });

  close.addEventListener("click", () => {
    modalContent.classList.remove("active");
    modalDialog.classList.remove("active");
  });

  // Scroll header to-fixed
  let navbarArea = document.querySelector(".navbar__area");
  document.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      navbarArea.classList.add("to-fixed");
    } else {
      navbarArea.classList.remove("to-fixed");
    }
  });

  // Slider Swiper js
  var swiper = new Swiper(".feedback-slider", {
    // slidesPerView: 3,
    spaceBetween: 30, // Khoảng cách giữa các item
    // centeredSlides: true, // Bắt đầu chạy từ vị trí giữa true thì thực hiện false thì không
    freeMode: true,
    autoplay: {
      delay: 4500, // độ trễ
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      spaceBetween: 40000,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1020: {
        slidesPerView: 1,
      },
    },
  });
});
