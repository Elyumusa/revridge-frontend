import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // A hash target wins over the top-of-page reset, otherwise the primary
        // nav's Learn / Invest / Grow links land at the top of the home route
        // instead of at their section.
        if (hash) {
            let target: Element | null = null;
            try {
                target = document.querySelector(hash);
            } catch {
                target = null;
            }
            if (target) {
                // Instant, to match the plain top-of-page reset below. Animating
                // a full-page jump on arrival delays the landing and is skipped
                // outright by browsers that are not painting the tab.
                target.scrollIntoView({ block: 'start', behavior: 'instant' });
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}
