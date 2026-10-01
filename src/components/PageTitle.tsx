import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SUFFIX = 'Revridge';

/**
 * Every route rendered the home page's title, so tabs, bookmarks and shared
 * links were indistinguishable. Titles are declared here rather than per page
 * so the wording stays consistent with the navigation.
 */
const titles: Record<string, string> = {
    '/': 'Revridge — Learn. Invest. Grow wealth.',
    '/about': `About — ${SUFFIX}`,
    '/support': `Help and support — ${SUFFIX}`,
    '/faq': `Frequently asked questions — ${SUFFIX}`,
    '/compliance': `Compliance and responsibilities — ${SUFFIX}`,
    '/download': `Get the app — ${SUFFIX}`,
    '/blog': `Articles — ${SUFFIX}`,
    '/article': `Article — ${SUFFIX}`,
    '/privacy': `Privacy policy — ${SUFFIX}`,
    '/terms': `Terms of service — ${SUFFIX}`,
    '/div_calendar': `Dividend calendar — ${SUFFIX}`,
    '/stock-predictor': `Price prediction — ${SUFFIX}`,
    '/trading-bot': `Market analysis — ${SUFFIX}`,
};

export default function PageTitle() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = titles[pathname] ?? `Page not found — ${SUFFIX}`;
    }, [pathname]);

    return null;
}
