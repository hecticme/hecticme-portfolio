// Card Navigation
const skillsCard = document.querySelector(".skills-card");
const worksCard = document.querySelector(".works-card");
const aboutMeCard = document.querySelector(".about-me-card");
const skillsCardLink = document.querySelector(".skills-card .card-text");
const worksCardLink = document.querySelector(".works-card .card-text");
const aboutMeCardLink = document.querySelector(".about-me-card .card-text");

skillsCard.addEventListener("click", () => {
  skillsCardLink.click();
});
worksCard.addEventListener("click", () => {
  worksCardLink.click();
});
aboutMeCard.addEventListener("click", () => {
  aboutMeCardLink.click();
});
// End of Card Navigation

// Observe fly-in animation for left-nav
const observeOptions = {
  rootMargin: "100px 0px 0px 0px",
};
const leftNav = document.querySelector(".left-nav");
const intro = document.querySelector(".intro");
const leftNavObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      leftNav.classList.add("show");
    } else {
      leftNav.classList.remove("show");
    }
  });
}, observeOptions);
leftNavObserver.observe(intro);
// End of Observe fly-in animation for left-nav

// Skill cards logic
const eye = document.querySelector(".eye");
const eyeBall = document.querySelector(".eye-ball");
// Eyes follow cursor logic
const getMousePosition = (event, target) => {
  const result = [];
  const rect = target.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const centerX = (rect.right - rect.left) / 2;
  const centerY = (rect.bottom - rect.top) / 2;
  const moveX = mouseX - centerX;
  const moveY = mouseY - centerY;
  result.push(moveX, moveY);
  return result;
};

skillsCard.onmousemove = (e) => {
  const [moveX, moveY] = getMousePosition(e, skillsCard);
  const [panX, panY] = [0.1 * moveX, 0.1 * moveY];
  eyeBall.animate(
    {
      transform: `translate(${-50 + panX}%, ${-50 + panY}%)`,
    },
    {
      duration: 750,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
  eye.animate(
    {
      transform: `translate(${-50 + panX}%, ${-50 + panY}%) rotate(45deg)`,
    },
    {
      duration: 750,
      fill: "forwards",
      easing: "ease-in-out",
      delay: 250,
    }
  );
};
// Eye goes back to  original position
skillsCard.onmouseout = () => {
  eyeBall.animate(
    {
      transform: `translate(-50%, -50%)`,
    },
    {
      duration: 750,
      fill: "forwards",
      easing: "ease",
    }
  );
  eye.animate(
    {
      transform: `translate(-50%, -50%) rotate(45deg)`,
    },
    {
      duration: 750,
      fill: "forwards",
      easing: "ease",
      delay: 250,
    }
  );
};
// End of Skill cards logic

// -- Skills layout follow cursor
const skillsLayout = document.querySelector(".skills-layout");
const skillsSection = document.querySelector("#skills");
const logoLayout1 = document.querySelector("#logo-layout-1");
const logoLayout2 = document.querySelector("#logo-layout-2");
const logoLayout3 = document.querySelector("#logo-layout-3");
const logoLayout4 = document.querySelector("#logo-layout-4");
const logoLayout5 = document.querySelector("#logo-layout-5");
const logoLayoutArr = [
  logoLayout1,
  logoLayout2,
  logoLayout3,
  logoLayout4,
  logoLayout5,
];

skillsSection.addEventListener("mousemove", (e) => {
  const [moveX, moveY] = getMousePosition(e, skillsSection);
  const [panX, panY] = [0.05 * moveX, 0.05 * moveY];

  let delay1;
  let delay2;
  let delay3;
  let delay4;

  if (panX <= 0) {
    delay1 = 0;
    delay2 = 100;
    delay3 = 300;
    delay4 = 400;
  } else {
    delay1 = 400;
    delay2 = 300;
    delay3 = 100;
    delay4 = 0;
  }
  const mediaQuery = window.matchMedia("(max-width: 800px)");
  if (mediaQuery.matches) {
    if (panY >= 0) {
      delay1 = 0;
      delay2 = 100;
      delay3 = 300;
      delay4 = 400;
    } else {
      delay1 = 400;
      delay2 = 300;
      delay3 = 100;
      delay4 = 0;
    }
  }
  logoLayout1.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease-in-out",
      delay: delay1,
    }
  );
  logoLayout2.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease-in-out",
      delay: delay2,
    }
  );
  logoLayout3.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease-in-out",
      delay: 200,
    }
  );
  logoLayout4.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease-in-out",
      delay: delay3,
    }
  );
  logoLayout5.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease-in-out",
      delay: delay4,
    }
  );
});

skillsSection.addEventListener("mouseout", () => {
  logoLayoutArr.forEach((logo) => {
    logo.animate(
      {
        transform: `translate(0px, 0px)`,
      },
      {
        duration: 500,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
  });
});

// -- End of Skills layout follow cursor

// -- Skills layout show name on hover
const logos = document.querySelectorAll(".logo");
logos.forEach((logo) => {
  logo.addEventListener("mouseover", () => {
    const img = document.querySelector(`#logo-img-${logo.dataset.logoTarget}`);
    const text = document.querySelector(
      `#logo-text-${logo.dataset.logoTarget}`
    );
    img.classList.add("show");
    text.classList.add("show");
  });
});
logos.forEach((logo) => {
  logo.addEventListener("mouseout", () => {
    const img = document.querySelector(`#logo-img-${logo.dataset.logoTarget}`);
    const text = document.querySelector(
      `#logo-text-${logo.dataset.logoTarget}`
    );
    img.classList.remove("show");
    text.classList.remove("show");
  });
});
// -- End of Skills layout show name on hover

// Open and close contact me form
const openContactBtn = document.querySelectorAll(
  '[data-modal-target="#contact-form"]'
);
const closeContactBtn = document.querySelectorAll("[data-close-btn]");
const overlay = document.querySelector(".overlay");
const contactForm = document.querySelector("#contact-form");

openContactBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    contactForm.classList.add("show");
    overlay.classList.add("show");
  });
});
closeContactBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    contactForm.classList.remove("show");
    overlay.classList.remove("show");
  });
});
overlay.addEventListener("click", () => {
  contactForm.classList.remove("show");
  overlay.classList.remove("show");
});
// End of Open and close contact me form

// Observe fly-in animation
const flyInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        flyInObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.7,
  }
);

const greeting = document.querySelector(".greeting");
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeImg = document.querySelector(".about-me-img");
const projectImgs = document.querySelectorAll(".project-img");

flyInObserver.observe(skillsCard);
flyInObserver.observe(worksCard);
flyInObserver.observe(aboutMeCard);
flyInObserver.observe(greeting);
flyInObserver.observe(aboutMeText);
flyInObserver.observe(aboutMeImg);
projectImgs.forEach((img) => {
  flyInObserver.observe(img);
});
// End of Observe fly-in animation
