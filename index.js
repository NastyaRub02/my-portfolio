document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    aboutSection.classList.add("animate");
  });

  document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});

// Modal
function openModal(imageUrl) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal_img');
    modal.style.display = 'block';
    modalImg.src = imageUrl;
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  