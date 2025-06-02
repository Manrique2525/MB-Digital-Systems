document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out'
    });

    // Menu toggle functionality (ícono hamburguesa)
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu') || document.getElementById('mobile-menu');

    menuToggle?.addEventListener('click', function () {
        menu?.classList.toggle('active') || menu?.classList.toggle('hidden');

        // Cambiar ícono (solo si hay íconos)
        const icon = this.querySelector('i');
        if (icon) {
            if (menu?.classList.contains('active') || !menu?.classList.contains('hidden')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Cerrar menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('#menu a, #mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu?.classList.remove('active');
            menu?.classList.add('hidden');
            const icon = document.querySelector('#menu-toggle i');
            icon?.classList.remove('fa-times');
            icon?.classList.add('fa-bars');
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto 3D para las tarjetas
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });

    // Animación en scroll personalizada
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .about-content, .about-image, .contact-info, .contact-form, .feature');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar
// Modal y Carrusel Responsive
const modal = document.getElementById('welcomeModal');
const closeModal = document.getElementById('closeModal');
const acceptBtn = document.getElementById('acceptBtn');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
let carouselInterval;
let isMobile = window.innerWidth < 768; // 768px es el breakpoint md de Tailwind
const totalItems = document.querySelectorAll('.carousel-item').length;

// Mostrar modal al cargar
function showModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    updateCarousel();
    if (!isMobile) {
        startCarousel();
    }
}

// Cerrar modal
function closeModalHandler() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    clearInterval(carouselInterval);
}

// Actualizar carrusel
function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('bg-primary', index === currentIndex);
        indicator.classList.toggle('bg-opacity-100', index === currentIndex);
        indicator.classList.toggle('bg-opacity-50', index !== currentIndex);
    });
}

// Autoavance solo en desktop
function startCarousel() {
    if (!isMobile) {
        carouselInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, 5000);
    }
}

// Event listeners
closeModal?.addEventListener('click', closeModalHandler);
acceptBtn?.addEventListener('click', closeModalHandler);

prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
    resetInterval();
});

nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
    resetInterval();
});

// Navegación por indicadores
indicators?.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        resetInterval();
    });
});

// Reiniciar intervalo
function resetInterval() {
    clearInterval(carouselInterval);
    startCarousel();
}

// Manejar cambios de tamaño
function handleResize() {
    isMobile = window.innerWidth < 768;
    if (isMobile) {
        clearInterval(carouselInterval);
    } else if (!modal.classList.contains('hidden')) {
        startCarousel();
    }
}

// Mostrar modal después de 1 segundo
setTimeout(showModal, 1000);

// Event listeners para responsive
window.addEventListener('resize', handleResize);

// Swipe para móviles
let touchStartX = 0;
let touchEndX = 0;

carouselInner?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

carouselInner?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe izquierda
        currentIndex = (currentIndex + 1) % totalItems;
    } else if (touchEndX > touchStartX + 50) {
        // Swipe derecha
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }
    updateCarousel();
}
});
