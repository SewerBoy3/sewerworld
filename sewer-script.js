document.addEventListener('DOMContentLoaded', () => {
    // ANIMACIÓN DE ENLACES SOCIALES (>>_)
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        const prefix = link.querySelector('.link-prefix');
        if(prefix) {
            link.addEventListener('mouseenter', () => {
                prefix.textContent = '>>_';
                prefix.interval = setInterval(() => {
                    prefix.textContent = prefix.textContent === '>>_' ? '>> ' : '>>_';
                }, 300);
            });
            
            link.addEventListener('mouseleave', () => {
                clearInterval(prefix.interval);
                prefix.textContent = '>>';
            });
        }
    });
});