"use strict";

// ============= Declaration of elements =================
const animate = document.querySelectorAll(".animate");
const animateLeft = document.querySelectorAll(".animate-left");
const animateRight = document.querySelectorAll(".animate-right");
const navIcon = document.querySelector(".nav-icon");
const menuList = document.querySelector(".menu-list");
const menuItem = document.querySelectorAll(".menu-item");
const navBtnContent = document.querySelector(".nav-btn-content");
const navBtnContentLiA = document.querySelector(".nav-btn-content li a");
const visible = document.querySelector(".visible");
const hidden = document.querySelector(".hidden");

// ======================================================
// =============== Fade transitions =====================
//=======================================================

// ============= If section is visible in window =================
const isVisible = (e) => {
  const elementDiv = e.getBoundingClientRect();
  let distanceFromTop = 0;
  return elementDiv.top - document.documentElement.clientHeight <
    distanceFromTop
    ? true
    : false;
};

// =============== Fade in =====================
const scanElementsFadeIn = (e) => {
  animate.forEach((e) => {
    if (isVisible(e)) {
      e.classList.add("fade-in");
    } else {
      e.classList.remove("fade-in");
    }
  });
};

window.addEventListener("scroll", scanElementsFadeIn);

// ================= Fade Left ====================
const scanElementsFadeLeft = (e) => {
  animateLeft.forEach((e) => {
    if (isVisible(e)) {
      e.classList.add("fade-left");
    } else {
      e.classList.remove("fade-left");
    }
  });
};

window.addEventListener("scroll", scanElementsFadeLeft);

// =============== Fade right ====================
const scanElementsFadeRight = (e) => {
  animateRight.forEach((e) => {
    if (isVisible(e)) {
      e.classList.add("fade-right");
    } else {
      e.classList.remove("fade-right");
    }
  });
};

window.addEventListener("scroll", scanElementsFadeRight);

// =====================================================
// ============== Show menu on click ===================
// =====================================================

// ================ Switch from visible to not visible menu click ===================
const menuClick = (e) => {
  e.preventDefault();
  if (navBtnContent.classList.contains("hidden")) {
    navBtnContent.classList.remove("hidden");
    navBtnContent.classList.add("visible");
    navIcon.classList.add("open");
  } else {
    navBtnContent.classList.remove("visible");
    navBtnContent.classList.add("hidden");
    navIcon.classList.remove("open");
  }
};

navIcon.addEventListener("click", menuClick);

// ================ Switch from visible to not visible on link click ===============
const notVisible = () => {
  navBtnContent.classList.remove("visible");
  navBtnContent.classList.add("hidden");
};

const linkClick = () => {
  notVisible();
  navIcon.classList.remove("open");
};

menuItem.forEach((item) => {
  item.addEventListener("click", linkClick);
});

// ==================== Switch from visible to not visible on click anywhere =======================
const anywhereClick = (e) => {
  if (!navBtnContentLiA.contains(e.target) && !navIcon.contains(e.target)) {
    notVisible();
    navIcon.classList.remove("open");
  }
};

window.addEventListener("click", anywhereClick);
