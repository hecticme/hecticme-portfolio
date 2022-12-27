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
skillsCard.onmouseout = (e) => {
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
