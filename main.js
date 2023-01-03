// Card Navigation
const skillsCard = document.querySelector('.skills-card');
const worksCard = document.querySelector('.works-card');
const aboutMeCard = document.querySelector('.about-me-card');
const skillsCardLink = document.querySelector('.skills-card .card-text');
const worksCardLink = document.querySelector('.works-card .card-text');
const aboutMeCardLink = document.querySelector('.about-me-card .card-text');

skillsCard.addEventListener('click', () => {
  skillsCardLink.click();
});
worksCard.addEventListener('click', () => {
  worksCardLink.click();
});
aboutMeCard.addEventListener('click', () => {
  aboutMeCardLink.click();
});
// End of Card Navigation

// Fly-in animation for left-nav
const observeOptions = {
  rootMargin: '100px 0px 0px 0px',
};
const leftNav = document.querySelector('.left-nav');
const intro = document.querySelector('.intro');
const leftNavObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      leftNav.classList.add('show');
    } else {
      leftNav.classList.remove('show');
    }
  });
}, observeOptions);
leftNavObserver.observe(intro);
// End of Fly-in animation for left-nav

// Skill cards logic
const eye = document.querySelector('.eye');
const eyeBall = document.querySelector('.eye-ball');
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
  const panX = 0.1 * moveX;
  const panY = 0.1 * moveY;
  eyeBall.animate(
    {
      transform: `translate(${-50 + panX}%, ${-50 + panY}%)`,
    },
    {
      duration: 750,
      fill: 'forwards',
      easing: 'ease-in-out',
    }
  );
  eye.animate(
    {
      transform: `translate(${-50 + panX}%, ${-50 + panY}%) rotate(45deg)`,
    },
    {
      duration: 750,
      fill: 'forwards',
      easing: 'ease-in-out',
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
      fill: 'forwards',
      easing: 'ease',
    }
  );
  eye.animate(
    {
      transform: `translate(-50%, -50%) rotate(45deg)`,
    },
    {
      duration: 750,
      fill: 'forwards',
      easing: 'ease',
      delay: 250,
    }
  );
};
// End of Skill cards logic

// Logo layout show name on hover
const logos = document.querySelectorAll('.logo');
logos.forEach((logo) => {
  logo.addEventListener('mouseover', () => {
    const img = document.querySelector(`#logo-img-${logo.dataset.logoTarget}`);
    const text = document.querySelector(
      `#logo-text-${logo.dataset.logoTarget}`
    );
    img.classList.add('show');
    text.classList.add('show');
  });
});
logos.forEach((logo) => {
  logo.addEventListener('mouseout', () => {
    const img = document.querySelector(`#logo-img-${logo.dataset.logoTarget}`);
    const text = document.querySelector(
      `#logo-text-${logo.dataset.logoTarget}`
    );
    img.classList.remove('show');
    text.classList.remove('show');
  });
});
// End of Logo layout show name on hover

// Open and close contact me form
const openContactBtn = document.querySelectorAll(
  '[data-modal-target="#contact-form"]'
);
const closeContactBtn = document.querySelectorAll('[data-close-btn]');
const overlay = document.querySelector('.overlay');
const contactForm = document.querySelector('#contact-form');

openContactBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    contactForm.classList.add('show');
    overlay.classList.add('show');
  });
});
closeContactBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    contactForm.classList.remove('show');
    overlay.classList.remove('show');
  });
});
overlay.addEventListener('click', () => {
  contactForm.classList.remove('show');
  overlay.classList.remove('show');
});
// End of Open and close contact me form

// About me section eye following logic
const aboutMeSection = document.querySelector('#about-me');
const aboutMeEye = document.querySelector('.about-me-img #eye');
const aboutMeEyeBall = document.querySelector('.about-me-img #eye-ball');

aboutMeSection.onmousemove = (e) => {
  const [moveX, moveY] = getMousePosition(e, aboutMeEye);
  const panX = 0.02 * moveX;
  const panY = 0.02 * moveY;

  aboutMeEyeBall.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 100,
      easing: 'ease-in-out',
      fill: 'forwards',
    }
  );
};
// End of About me section eye following logic

// Fly-in animation
const flyInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        flyInObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.7,
  }
);

const greeting = document.querySelector('.greeting');
const aboutMeText = document.querySelector('.about-me-text');
const aboutMeImg = document.querySelector('.about-me-img');
const projectImgs = document.querySelectorAll('.project-img');

flyInObserver.observe(skillsCard);
flyInObserver.observe(worksCard);
flyInObserver.observe(aboutMeCard);
flyInObserver.observe(greeting);
flyInObserver.observe(aboutMeText);
flyInObserver.observe(aboutMeImg);
projectImgs.forEach((img) => {
  flyInObserver.observe(img);
});
