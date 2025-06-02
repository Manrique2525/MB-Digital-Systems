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

    // Modal y Carrusel con Tailwind
const modal = document.getElementById('welcomeModal');
const closeModal = document.getElementById('closeModal');
const acceptBtn = document.getElementById('acceptBtn');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
const indicators = document.querySelectorAll('.carousel-indicators button, .indicator');

let currentIndex = 0;
let carouselInterval;
const totalItems = document.querySelectorAll('.carousel-item').length;

// Mostrar modal al cargar
function showModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    startCarousel();
    updateCarousel();
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
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('bg-primary', 'bg-opacity-100');
            indicator.classList.remove('bg-opacity-50');
        } else {
            indicator.classList.remove('bg-primary', 'bg-opacity-100');
            indicator.classList.add('bg-opacity-50');
        }
    });
}

// Autoavance del carrusel
function startCarousel() {
    carouselInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 5000);
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

// Reiniciar intervalo al interactuar
function resetInterval() {
    clearInterval(carouselInterval);
    startCarousel();
}

// Mostrar modal después de 1 segundo
setTimeout(showModal, 1000);

// Pausar al interactuar con el modal
modal?.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

modal?.addEventListener('mouseleave', () => {
    startCarousel();
});
});
