

const sun = document.querySelector('.sun');
      const dayNight = document.querySelector('.dayNight');
      // const img = document.querySelector('.img');
      sun.addEventListener('click', () => {
        dayNight.classList.toggle('night');
      });