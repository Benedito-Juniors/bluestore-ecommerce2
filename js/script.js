const navbar = document.querySelector('.navbar');
const menuButton = document.querySelector('.menu-button');

// Verifica se a tela tem largura menor que 800px
menuButton.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
        navbar.classList.toggle('show-menu');
    }
});

const year = new Date().getFullYear();
    
// Altera o conteúdo do elemento com id "current-year"
document.getElementById("current-year").textContent = year;
