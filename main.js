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
// Fly-in animation for left-nav
const observeOptions = {
  rootMargin: '100px 0px 0px 0px',
};
const leftNav = document.querySelector('.left-nav');
const intro = document.querySelector('.intro');
const flyInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      leftNav.classList.add('show-left-nav');
    } else {
      leftNav.classList.remove('show-left-nav');
    }
  });
}, observeOptions);
flyInObserver.observe(intro);
// Skill cards logic
const eye = document.querySelector('.eye');
const eyeBall = document.querySelector('.eye-ball');
// Eyes follow cursor logic
skillsCard.onmousemove = (e) => {
  const rect = skillsCard.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const centerX = (rect.right - rect.left) / 2;
  const centerY = (rect.bottom - rect.top) / 2;
  const moveX = mouseX - centerX;
  const moveY = mouseY - centerY;
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
// Logo layout show name
const logoTexts = document.querySelectorAll('.logo-text');
const logoEye = document.querySelector('.skills-layout-eye');
const toggleLogoName = () => {
  logoTexts.forEach((logoText) => {
    logoText.classList.toggle('show-text');
  });
};
logoEye.addEventListener('click', toggleLogoName);
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
