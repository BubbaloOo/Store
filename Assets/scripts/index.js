let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.oferta-item');
    const totalItems = items.length;

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalItems;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }

    const newTransform = -currentIndex * 100;
    document.querySelector('#ofertas').style.transform = `translateX(${newTransform}%)`;
}

// Agregar la clase nav-scrolled cuando se haga scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});
// MENU
document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('menu-dropdown');
    // Animación del menú con entrada suave
    if (menu.style.display === 'block') {
        menu.style.opacity = 0;
        menu.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 100); // Espera 0.1s antes de ocultar el menú
    } else {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.style.opacity = 1;
            menu.style.transform = 'translateY(0)';
        }, 10); // Espera 0.01s para activar la animación
    }
});

// Cambiar el fondo cuando el usuario hace scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// MENU
document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('menu-dropdown');
    // Animación del menú con entrada suave
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});
// Menú desplegable
document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('menu-dropdown');
    menu.classList.toggle('show');
});

// Cambiar el fondo cuando el usuario hace scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const menuDropdown = document.getElementById('menu-dropdown');
    const menuButton = document.getElementById('menu-button');
    
    // Cambiar el color del nav
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
        if (menuDropdown.classList.contains('show')) {
            menuDropdown.style.backgroundColor = '#ffffff'; // Fondo blanco cuando el scroll está abajo
            menuDropdown.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; // Sombra activa
        }
    } else {
        nav.classList.remove('nav-scrolled');
        if (menuDropdown.classList.contains('show')) {
            menuDropdown.style.backgroundColor = '#F5F5F7'; // Fondo gris claro cuando el scroll está arriba
            menuDropdown.style.boxShadow = 'none'; // Eliminar sombra
        }
    }
});

// MENU
document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('menu-dropdown');
    menu.classList.toggle('show');
    
    // Cambiar el color del menú dependiendo de la posición del scroll
    if (window.scrollY > 0) {
        menu.style.backgroundColor = '#ffffff'; // Fondo blanco cuando el scroll está abajo
        menu.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; // Sombra activa
    } else {
        menu.style.backgroundColor = '#F5F5F7'; // Fondo gris claro cuando el scroll está arriba
        menu.style.boxShadow = 'none'; // Eliminar sombra
    }
});
