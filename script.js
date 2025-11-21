document.addEventListener("DOMContentLoaded", function() {
    const allSmoothLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('.main-header-sticky');

    allSmoothLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const href = link.getAttribute('href');
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = targetPosition - headerHeight - 20; 

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const serviceSelect = document.querySelector("#service-package-select");
    const allBookButtons = document.querySelectorAll(".btn-book-service");

    allBookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = button.dataset.service;
            if (serviceSelect) {
                serviceSelect.value = serviceName;
            }
        });
    });

    const modalOverlay = document.querySelector("#booking-modal-overlay");
    const modalCloseButton = document.querySelector("#modal-close-button");
    const modalOkButton = document.querySelector("#modal-ok-button");
    const submitButton = document.querySelector("#submit-booking");

    function openModal() {
        modalOverlay.classList.add("active");
    }

    function closeModal() {
        modalOverlay.classList.remove("active");
    }

    if (submitButton) {
        submitButton.addEventListener("click", function(event) {
            event.preventDefault(); 
            openModal();
        });
    }

    if (modalCloseButton) {
        modalCloseButton.addEventListener("click", closeModal);
    }

    if (modalOkButton) {
        modalOkButton.addEventListener("click", closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", function(event) {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    console.log("Logic for website Detailing Center succesfull loaded!");

});