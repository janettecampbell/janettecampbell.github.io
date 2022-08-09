// ============= Declaration of elements =================
const animate = document.querySelectorAll(".animate");
const animateLeft = document.querySelectorAll(".animate-left");
const animateRight = document.querySelectorAll(".animate-right");

// ============= If section is visible in window =================
const isVisible = (e) => {
  const elementDiv = e.getBoundingClientRect();
  console.log(window.innerHeight);
  console.log(elementDiv.top);
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
