const scrollAnimation = () => {
  const midContainer = document.querySelector(".top-container");
  const navbar = document.querySelector(".top-bottom-nav ");

  const sectionObserver = new IntersectionObserver(function (
    entries,
    sectionObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("sticky");
        const navigationHiegt = document.querySelector(
          ".top-bottom-nav .sticky"
        ).offsetHeight;

        document.documentElement.style.setProperty(
          `--scroll-padding, ${navigationHiegt - 1}px`
        );
      } else {
        navbar.classList.remove("sticky");
      }
    });
  });
  sectionObserver.observe(midContainer);
};

const Accordion = () => {
  const accordionBtn = document.querySelectorAll(".mobile-schedule ul li h1");
  accordionBtn.forEach((accordion, index) => {
    accordion.addEventListener("click", () => {
      const accBtn = accordion.parentElement.parentElement
        .closest(".mobile-schedule")
        .querySelectorAll(".list-schedule");
      accBtn.forEach((element) => {
        element.classList.remove("active");
      });
      accBtn[index].classList.toggle("active");
    });
  });
};

const bullets = () => {
  const indicatorBullets = document.querySelectorAll(".dots-container ul li");
  indicatorBullets.forEach((element, index) => {
    element.addEventListener("click", () => {
      indicatorBullets.forEach((el) => {
        el.classList.remove("active");
      });
      element.classList.add("active");
      const slider = element.parentElement.parentElement
        .closest(".carousel")
        .querySelectorAll(".slider li");

      const slideContainer = element.parentElement.parentElement
        .closest(".carousel")
        .querySelector(".coarousel-container .slider");

      slider.forEach((slides) => {
        slides.classList.remove("active");
      });
      slider[index].classList.add("active");
      slideContainer.style.transform = `translate(${index * -100}%)`;
    });
  });
};

const botMenu = () => {
  const menuBot = document.querySelectorAll(".bott-nav ul li ");
  menuBot.forEach((btnMenu, index) => {
    btnMenu.addEventListener("click", () => {
      menuBot.forEach((element) => {
        element.classList.remove("active");
      });

      btnMenu.classList.add("active");

      const scheduleList = btnMenu.parentElement.parentElement
        .closest(".inner-section-contianer")
        .querySelectorAll(".schedule-container .schedule");
      scheduleList.forEach((list) => {
        list.classList.remove("active");
      });
      scheduleList[index].classList.add("active");

      const changeBg = document.querySelector(".bottom .secondBg");
      index !== 1
        ? (changeBg.style.display = "none")
        : (changeBg.style.display = "block");

      console.log(changeBg);
    });
  });
};
scrollAnimation();
botMenu();
bullets();
Accordion();
