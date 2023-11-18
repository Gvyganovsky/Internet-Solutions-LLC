const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const sliderWidth = document.querySelector('.slider').offsetWidth;

let slideIndex = 0;

function updateSlider() {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${-slideIndex * sliderWidth/3}px)`;
}

nextBtn.addEventListener('click', () => {
  if (slideIndex < slideItems.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slideItems.length - 1;
  }
  updateSlider();
});

slides.addEventListener('transitionend', () => {
  if (slideItems[slideIndex].classList.contains('firstClone')) {
    slides.style.transition = 'none';
    slideIndex = 0;
    slides.style.transform = `translateX(${-slideIndex * sliderWidth}px)`;
  }
  if (slideItems[slideIndex].classList.contains('lastClone')) {
    slides.style.transition = 'none';
    slideIndex = slideItems.length - 3;
    slides.style.transform = `translateX(${-slideIndex * sliderWidth}px)`;
  }
});

// Клонирование первых и последних слайдов для бесконечного слайдера
const firstClone = slideItems[0].cloneNode(true);
firstClone.classList.add('firstClone');
const lastClone = slideItems[slideItems.length - 1].cloneNode(true);
lastClone.classList.add('lastClone');
slides.appendChild(firstClone);
slides.insertBefore(lastClone, slideItems[0]);
slideIndex = 1;
updateSlider();
