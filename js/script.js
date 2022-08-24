// ============= Declaration of elements =================
const animate = document.querySelectorAll(".animate");
const animateLeft = document.querySelectorAll(".animate-left");
const animateRight = document.querySelectorAll(".animate-right");
const navBtnImg = document.querySelector(".nav-btn-img");
const navBtnContent = document.querySelector(".nav-btn-content");
const visible = document.querySelector(".visible");
const hidden = document.querySelector(".hidden");

// ======================================================
// =============== Fade transitions =====================
//=======================================================

// ============= If section is visible in window =================
const isVisible = (e) => {
  const elementDiv = e.getBoundingClientRect();
  let distanceFromTop = -300;
  return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
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

// ================ Switch from visible to not visible===================
const handleClick = (e) => {
  e.preventDefault();
  if (navBtnContent.classList.contains("hidden")) {
    navBtnContent.classList.remove("hidden");
    navBtnContent.classList.add("visible");
  } else {
    navBtnContent.classList.remove("visible");
    navBtnContent.classList.add("hidden");
  }
};

navBtnImg.addEventListener("click", handleClick);
