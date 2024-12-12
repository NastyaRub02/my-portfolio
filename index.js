document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    aboutSection.classList.add("animate");
  });

  document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});

// модал

  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  // Закрытие модального окна при нажатии вне его
  window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      if (event.target === modals[i]) {
        modals[i].style.display = 'none';
      }
    }
  }
