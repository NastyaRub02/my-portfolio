// Берём все блоки с картинками
const imgBoxes = document.querySelectorAll('.presentations-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

// Открытие модалки при клике
imgBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const imgSrc = box.getAttribute('data-img');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
  });
});

// Закрытие модалки
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие при клике вне картинки
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
