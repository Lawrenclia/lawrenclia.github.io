(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isSwitching = false;

    function applyTheme(button) {
        const body = document.body;
        const icon = button.querySelector('i');
        const isDark = body.classList.toggle('dark-theme');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        button.setAttribute('aria-label', isDark ? '切换到浅色模式' : '切换到深色模式');

        if (icon) {
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
        }
    }

    const initialButton = document.querySelector('.theme-toggle');
    if (initialButton) {
        initialButton.setAttribute(
            'aria-label',
            document.body.classList.contains('dark-theme') ? '切换到浅色模式' : '切换到深色模式'
        );
    }

    document.addEventListener('click', async (event) => {
        const target = event.target instanceof Element ? event.target : null;
        const button = target?.closest('.theme-toggle');

        if (!button) return;

        event.preventDefault();
        event.stopImmediatePropagation();

        if (isSwitching) return;

        button.classList.add('is-animating');

        if (!document.startViewTransition || reducedMotion.matches) {
            applyTheme(button);
            window.setTimeout(() => button.classList.remove('is-animating'), 360);
            return;
        }

        isSwitching = true;
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        document.documentElement.classList.add('theme-transitioning');
        const transition = document.startViewTransition(() => applyTheme(button));

        try {
            await transition.ready;
            const animation = document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0 at ${x}px ${y}px)`,
                        `circle(${radius}px at ${x}px ${y}px)`
                    ]
                },
                {
                    duration: 560,
                    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    pseudoElement: '::view-transition-new(root)'
                }
            );
            await animation.finished;
        } catch (_) {
            // The theme is already applied if the visual transition is interrupted.
        } finally {
            document.documentElement.classList.remove('theme-transitioning');
            button.classList.remove('is-animating');
            isSwitching = false;
        }
    }, true);
})();
