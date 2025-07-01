document.addEventListener('DOMContentLoaded', () => {
    // 技术栈分类动画
    animateTechCategories();

    // 技术项悬停效果
    initTechItemHover();

    // 技术栈交互效果
    initTechStackInteraction();

    // 滚动动画
    initScrollAnimations();
});

// 技术栈分类动画
function animateTechCategories() {
    const techCategories = document.querySelectorAll('.tech-category');
    if (!techCategories.length) return;

    // 添加观察器实现滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 交错动画
                entry.target.style.transitionDelay = `${index * 0.2}s`;
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    techCategories.forEach(category => {
        observer.observe(category);
    });
}

// 技术项悬停效果
function initTechItemHover() {
    const techItems = document.querySelectorAll('.tech-items li');

    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// 技术栈交互效果
function initTechStackInteraction() {
    const techCategories = document.querySelectorAll('.tech-category');

    techCategories.forEach(category => {
        category.addEventListener('click', function() {
            // 移除所有活动类
            techCategories.forEach(cat => cat.classList.remove('active'));

            // 添加活动类到当前类别
            this.classList.add('active');

            // 添加脉冲动画
            this.style.animation = 'techPulse 0.5s ease';

            // 动画结束后移除动画
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

// 滚动动画
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');

    // 添加观察器实现滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// 技术栈搜索功能
function initTechSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索技术栈...';
    searchInput.id = 'tech-search';
    searchInput.classList.add('tech-search');

    const heroContainer = document.querySelector('.tech-hero .container');
    heroContainer.appendChild(searchInput);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const techItems = document.querySelectorAll('.tech-items li');

        techItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
                item.classList.add('highlight');
            } else {
                item.style.display = 'none';
                item.classList.remove('highlight');
            }
        });
    });
}

// 页面加载完成后初始化搜索功能
window.addEventListener('load', () => {
    // initTechSearch();
});