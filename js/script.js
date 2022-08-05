const reveal = () => {
  const section = document.querySelectorAll(".section");

  for (let i = 0; i <= section.length; ++i) {
    const windowHeight = window.innerHeight;
    const elementTop = section[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      section[i].classList.add("active");
    } else {
      section[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);
