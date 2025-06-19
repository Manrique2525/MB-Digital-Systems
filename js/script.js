document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
        disable: window.innerWidth < 768 // Desactivar animaciones en móviles si es necesario
    });

    // Menu toggle functionality (ícono hamburguesa)
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle?.addEventListener('click', function () {
        mobileMenu?.classList.toggle('hidden');
        
        // Cambiar ícono
        const icon = this.querySelector('i');
        if (icon) {
            if (mobileMenu?.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        }
    });

    // Cerrar menú al hacer clic en un enlace (solo móvil)
    const menuLinks = document.querySelectorAll('#mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu?.classList.add('hidden');
            const icon = menuToggle?.querySelector('i');
            icon?.classList.remove('fa-times');
            icon?.classList.add('fa-bars');
        });
    });

    // Smooth scrolling para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Cerrar menú móvil si está abierto
                if (!mobileMenu?.classList.contains('hidden')) {
                    mobileMenu?.classList.add('hidden');
                    const icon = menuToggle?.querySelector('i');
                    icon?.classList.remove('fa-times');
                    icon?.classList.add('fa-bars');
                }

                // Calcular posición considerando el header fijo
                const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto 3D para las tarjetas (solo en desktop)
    if (window.innerWidth > 768) {
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
    }

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
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;

    // Mostrar modal al cargar
    function showModal() {
        // Verificar si ya se mostró el modal en esta sesión
        if (sessionStorage.getItem('modalShown')) return;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        updateCarousel();
        
        // Solo autoavance en desktop
        if (!isMobile) {
            startCarousel();
        }
        
        // Marcar como mostrado
        sessionStorage.setItem('modalShown', 'true');
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
            if (indicator) {
                indicator.classList.toggle('bg-primary', index === currentIndex);
                indicator.classList.toggle('bg-opacity-100', index === currentIndex);
                indicator.classList.toggle('bg-opacity-50', index !== currentIndex);
            }
        });
    }

    // Autoavance solo en desktop
    function startCarousel() {
        if (!isMobile && totalItems > 1) {
            clearInterval(carouselInterval);
            carouselInterval = setInterval(() => {
                goToNextSlide();
            }, 5000);
        }
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Event listeners para controles
    closeModal?.addEventListener('click', closeModalHandler);
    acceptBtn?.addEventListener('click', closeModalHandler);

    prevBtn?.addEventListener('click', () => {
        goToPrevSlide();
        resetInterval();
    });

    nextBtn?.addEventListener('click', () => {
        goToNextSlide();
        resetInterval();
    });

    // Navegación por indicadores
    indicators?.forEach((indicator, index) => {
        indicator?.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            resetInterval();
        });
    });

    // Reiniciar intervalo
    function resetInterval() {
        if (!isMobile) {
            clearInterval(carouselInterval);
            startCarousel();
        }
    }

    // Manejar cambios de tamaño
    function handleResize() {
        const newIsMobile = window.innerWidth < 768;
        
        // Solo si cambió el estado de móvil a desktop o viceversa
        if (newIsMobile !== isMobile) {
            isMobile = newIsMobile;
            
            if (isMobile) {
                clearInterval(carouselInterval);
            } else if (modal && !modal.classList.contains('hidden')) {
                startCarousel();
            }
        }
    }

    // Swipe para móviles
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
        carouselInner.style.transition = 'none';
    }

    function handleTouchMove(e) {
        if (!isDragging) return;
        touchEndX = e.touches[0].clientX;
        const diff = touchStartX - touchEndX;
        const offset = -currentIndex * 100 - (diff / window.innerWidth) * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    function handleTouchEnd() {
        if (!isDragging) return;
        isDragging = false;
        carouselInner.style.transition = 'transform 0.3s ease';
        
        const threshold = window.innerWidth / 4; // 25% del ancho de pantalla
        const diff = touchStartX - touchEndX;
        
        if (diff > threshold) {
            // Swipe izquierda - siguiente
            goToNextSlide();
        } else if (diff < -threshold) {
            // Swipe derecha - anterior
            goToPrevSlide();
        } else {
            // Vuelve a la posición actual
            updateCarousel();
        }
        
        // Resetear valores
        touchStartX = 0;
        touchEndX = 0;
    }

    // Agregar event listeners para touch
    if (carouselInner) {
        carouselInner.addEventListener('touchstart', handleTouchStart, { passive: true });
        carouselInner.addEventListener('touchmove', handleTouchMove, { passive: true });
        carouselInner.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Mostrar modal después de un breve retraso
    setTimeout(showModal, 1000);

    // Event listeners para responsive
    window.addEventListener('resize', handleResize);

    // Prevenir scroll cuando el modal está abierto
    document.addEventListener('touchmove', function(e) {
        if (modal && !modal.classList.contains('hidden')) {
            e.preventDefault();
        }
    }, { passive: false });

    // Mejorar el comportamiento del teclado virtual en móviles
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (isMobile) {
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
    });
});