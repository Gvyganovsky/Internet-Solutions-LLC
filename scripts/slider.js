document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    const slideCount = slides.length;
    let currentIndex = 1; // Начинаем с первого "реального" слайда
  
    // Клонирование первого и последнего слайдов для плавного цикла
    slidesContainer.appendChild(slides[0].cloneNode(true));
    slidesContainer.insertBefore(slides[slideCount - 1].cloneNode(true), slides[0]);
  
    // Установка начального сдвига для показа "второго" слайда
    slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
  
    function showSlide(index) {
      slidesContainer.style.transition = 'transform 0.5s ease';
      slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  
    function slideNext() {
      currentIndex++;
  
      if (currentIndex >= slideCount) {
        currentIndex = 1;
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
      }
  
      showSlide(currentIndex);
    }
  
    function slidePrev() {
      currentIndex--;
  
      if (currentIndex <= 0) {
        currentIndex = slideCount - 1;
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
      }
  
      showSlide(currentIndex);
    }
  
    nextBtn.addEventListener('click', slideNext);
    prevBtn.addEventListener('click', slidePrev);
  });
  