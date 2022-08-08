const animate = document.querySelectorAll(".animate");

const isVisible = (e) => {
  const elementDiv = e.getBoundingClientRect();
  console.log(window.innerHeight);
  console.log(elementDiv.top);
  let distanceFromTop = -300;
  return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
};

const scanElements = (e) => {
  animate.forEach((e) => {
    if (isVisible(e)) {
      e.classList.add("fade-in");
    } else {
      e.classList.remove("fade-in");
    }
  });
};

window.addEventListener("scroll", scanElements);
