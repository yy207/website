// 加载共享组件
function loadSharedComponents() {
    // 加载导航栏
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            initNavbar();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
            document.getElementById('navbar').innerHTML = '<header class="navbar"><div class="container">导航栏加载失败</div></header>';
        });

    // 加载页脚
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('footer').innerHTML = '<footer class="site-footer"><div class="container">页脚加载失败</div></footer>';
        });
}

// 初始化导航栏功能
function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 关闭移动菜单当点击菜单项
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                // 计算偏移量，考虑固定导航栏高度
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 表单验证和提交
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 获取表单数据
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // 简单验证
            if (!data.name || !data.email || !data.message) {
                alert('请填写所有必填字段');
                return;
            }

            // 这里应该是AJAX请求到后端
            console.log('表单提交:', data);

            // 模拟成功提交
            alert('感谢您的咨询！我们会尽快与您联系。');
            this.reset();
        });
    }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', () => {
    loadSharedComponents();
    initSmoothScroll();
    initContactForm();

    // 添加页面加载动画
    document.body.classList.add('loaded');

    // 设置当前活动菜单项
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// 滚动时固定导航栏样式
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});