document.addEventListener('DOMContentLoaded', () => {
    // 技能条动画
    animateSkills();

    // 时间线动画
    animateTimeline();
});

// 技能条动画
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    if (!skillBars.length) return;

    // 添加观察器实现滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// 时间线动画
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (!timelineItems.length) return;

    // 添加观察器实现滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 交错动画
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}