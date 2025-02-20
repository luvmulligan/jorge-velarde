document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  function hideAllSections() {
    sections.forEach((section) => {
      section.classList.remove('active');
    });
  }

  function showSection(sectionId) {
    hideAllSections();
    const section = document.getElementById(sectionId);
    section.classList.add('active');
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      showSection(sectionId);
    });
  });

  // Mostrar la sección de inicio por defecto
  showSection('bio');

  // Lógica del carrusel
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });
});
