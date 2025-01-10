document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on page load
    const elements = document.querySelectorAll('.profile-picture, .name, .description, .link');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Enhanced hover effects for links
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
            const icon = link.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            const icon = link.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
});