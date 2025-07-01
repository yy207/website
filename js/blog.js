document.addEventListener('DOMContentLoaded', () => {
    // 博客文章动画
    animateBlogPosts();
});

// 博客文章动画
function animateBlogPosts() {
    const blogPosts = document.querySelectorAll('.blog-post');
    if (!blogPosts.length) return;

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

    blogPosts.forEach(post => {
        observer.observe(post);
    });
}