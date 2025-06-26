import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        const start = globalThis.scrollY;
        const duration = 500;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            globalThis.scrollTo(0, start * (1 - progress));

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    }, [pathname]);

    return null;
};
