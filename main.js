// Fly-in animation
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }
//   });
// });
// const navCards = document.querySelectorAll('.nav-card');
// navCards.forEach((card) => {
//   observer.observe(card);
// });
// observer.observe(navCards);
// // Work Cards logic
// const worksCard = document.querySelector('.works-card');
// const shapes = document.querySelectorAll('.works-card > .shape');
// const worksAnimation = {
//   top: '50%',
//   left: '50%',
//   width: '40%',
//   height: '30%',
//   transform: 'translate(-50%, -50%)',
//   borderRadius: '5px',
// };
// worksCard.onmouseover = () => {
//   shapes.forEach((shape) => {
//     shape.animate(worksAnimation, {
//       duration: 750,
//       fill: 'forwards',
//       easing: 'ease-in-out',
//     });
//   });
// };
// worksCard.onmouseout = () => {
//   shapes.forEach((shape) => {
//     shape.animate(worksAnimation, {
//       duration: 750,
//       direction: 'alternate',
//       easing: 'ease-in-out',
//     });
//   });
// };
// Skill cards logic
const eye = document.querySelector('.eye');
const eyeBall = document.querySelector('.eye-ball');
const skillsCard = document.querySelector('.skills-card');
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
