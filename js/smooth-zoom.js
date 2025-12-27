// smooth-zoom.js

document.addEventListener('DOMContentLoaded', () => {
    // =================================================================
    // 配置区域
    // =================================================================
    // 【重要】请根据你的主题修改这里的选择器！
    // 意思是：选择 "文章正文容器" 下面的所有 "img" 标签
    // 常见示例：'.post-content img', '.article-entry img', '.markdown-body img'
    const SELECTOR = '.mc-image'; 
    
    // 忽略过小的图片（比如表情包），避免放大很难看
    const MIN_WIDTH = 50; 
    // =================================================================


    // 插入必要的 DOM 结构（遮罩层）
    // 这样就不需要手动去改主题的 HTML 模板了
    if (!document.getElementById('zoomOverlay')) {
        const overlayDiv = document.createElement('div');
        overlayDiv.className = 'zoom-overlay';
        overlayDiv.id = 'zoomOverlay';
        document.body.appendChild(overlayDiv);
    }

    const overlay = document.getElementById('zoomOverlay');
    let activeClone = null;
    let activeOriginal = null;
    const ANIMATION_MS = 400;
    let isOpening = false;
    let isClosing = false;

    // 为符合条件的图片绑定点击事件（若图片未加载完则等待 load 再绑定）
    const images = document.querySelectorAll(SELECTOR);
    images.forEach(bindImage);

    function bindImage(img) {
        if (img.dataset.zoomBound === '1') return; // 避免重复绑定
        // 如果图片还没加载完，naturalWidth 可能为 0，等加载后再尝试
        if (!img.complete || img.naturalWidth === 0) {
            img.addEventListener('load', () => bindImage(img), { once: true });
            return;
        }
        // 过滤掉太小的图片或带链接的图片
        if (img.naturalWidth < MIN_WIDTH || img.parentElement.tagName === 'A') return;

        img.dataset.zoomBound = '1';
        img.style.cursor = 'zoom-in'; // 设置鼠标手势
        img.addEventListener('click', (e) => {
            // 阻止冒泡，防止触发可能存在的父级点击事件
            e.stopPropagation(); 
            openImage(e.target);
        });
    }

    // 点击遮罩层关闭
    overlay.addEventListener('click', closeImage);
    // 滚动页面时关闭
    window.addEventListener('scroll', closeImage);
    // 按 ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeImage();
    });

    function openImage(targetImg) {
        if (activeClone || isOpening || isClosing) return;
        isOpening = true;
        activeOriginal = targetImg;

        // 1. 获取原图位置
        const rect = targetImg.getBoundingClientRect();

        // 2. 创建克隆图
        const clone = targetImg.cloneNode();
        clone.classList.add('zoom-clone');
        clone.style.margin = '0';
        clone.style.padding = '0';
        clone.style.top = `${rect.top}px`;
        clone.style.left = `${rect.left}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;

        document.body.appendChild(clone);
        activeClone = clone;

        // 隐藏原图
        requestAnimationFrame(() => {
            targetImg.classList.add('post-img-zooming');
            overlay.classList.add('active');
        });

        // 4. 计算放大后的位置
        const viewWidth = window.innerWidth;
        const viewHeight = window.innerHeight;
        const scale = Math.min(viewWidth / rect.width, viewHeight / rect.height) * 0.95;
        const translateX = (viewWidth - rect.width) / 2 - rect.left;
        const translateY = (viewHeight - rect.height) / 2 - rect.top;

        // 5. 触发动画
        requestAnimationFrame(() => {
            clone.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        });

        // 6. 动画结束标记
        let openHandled = false;
        const handleOpenEnd = (event) => {
            if (event && event.propertyName && !event.propertyName.includes('transform')) return;
            if (openHandled) return;
            openHandled = true;
            isOpening = false;
            clone.removeEventListener('transitionend', handleOpenEnd);
        };
        clone.addEventListener('transitionend', handleOpenEnd);
        setTimeout(handleOpenEnd, ANIMATION_MS + 50);

        // 7. 绑定关闭
        clone.addEventListener('click', closeImage);
    }

    function closeImage() {
        if (!activeClone || !activeOriginal || isClosing) return;
        isClosing = true;

        const clone = activeClone;
        const original = activeOriginal;

        clone.style.pointerEvents = 'none';
        clone.style.transform = '';
        overlay.classList.remove('active');

        let cleaned = false;
        const cleanup = () => {
            if (cleaned) return;
            cleaned = true;
            original.classList.remove('post-img-zooming');
            clone.remove();
            activeClone = null;
            activeOriginal = null;
            isClosing = false;
        };

        const handleCloseEnd = (event) => {
            if (event && event.propertyName && !event.propertyName.includes('transform')) return;
            clone.removeEventListener('transitionend', handleCloseEnd);
            cleanup();
        };
        clone.addEventListener('transitionend', handleCloseEnd);

        // 兜底：防止 transitionend 未触发导致状态卡死
        setTimeout(cleanup, ANIMATION_MS + 50);
    }
});