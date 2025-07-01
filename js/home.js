document.addEventListener('DOMContentLoaded', () => {
    // 服务领域轮播
    initDomainsSlider();

    // 客户评价轮播
    initTestimonialsSlider();

    // 技术栈动画
    animateTechStack();
});

// 服务领域轮播
function initDomainsSlider() {
    const slider = document.querySelector('.domains-slider');
    if (!slider) return;

    // 如果是移动设备，转换为轮播
    if (window.innerWidth < 768) {
        slider.classList.add('slick-slider');

        // 这里可以使用Slick等轮播库，或简单的自定义实现
        // 以下是简化的实现
        let currentIndex = 0;
        const cards = slider.querySelectorAll('.domain-card');
        const totalCards = cards.length;

        function showCard(index) {
            cards.forEach((card, i) => {
                card.style.display = i === index ? 'block' : 'none';
            });
        }

        showCard(currentIndex);

        // 自动轮播
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }, 3000);
    }
}

// 客户评价轮播
function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;

    // 简化的轮播实现
    let currentIndex = 0;
    const testimonials = slider.querySelectorAll('.testimonial-card');
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    if (totalTestimonials > 1) {
        showTestimonial(currentIndex);

        // 自动轮播
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            showTestimonial(currentIndex);
        }, 5000);
    }
}

// 技术栈动画
function animateTechStack() {
    const techItems = document.querySelectorAll('.tech-item');
    if (!techItems.length) return;

    // 添加观察器实现滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    techItems.forEach(item => {
        observer.observe(item);
    });
}