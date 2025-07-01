document.addEventListener('DOMContentLoaded', () => {
    // 项目筛选
    initPortfolioFilter();

    // 项目详情模态框
    initPortfolioModals();

    // 图片灯箱效果
    initLightbox();
});

// 项目筛选功能
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新活动按钮
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // 筛选项目
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    item.classList.add('animate');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// 项目详情模态框
function initPortfolioModals() {
    const modalTriggers = document.querySelectorAll('.view-details');
    const modals = document.querySelectorAll('.portfolio-modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // 打开模态框
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            document.querySelector(target).style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // 关闭模态框
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.portfolio-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // 点击模态框外部关闭
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
    });
}

// 图片灯箱效果
function initLightbox() {
    const zoomButtons = document.querySelectorAll('.portfolio-zoom');

    zoomButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            lightbox.style.zIndex = '3000';
            lightbox.style.cursor = 'zoom-out';

            const img = document.createElement('img');
            img.src = this.getAttribute('href');
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '8px';

            lightbox.appendChild(img);
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';

            lightbox.addEventListener('click', function() {
                document.body.removeChild(this);
                document.body.style.overflow = 'auto';
            });
        });
    });
}