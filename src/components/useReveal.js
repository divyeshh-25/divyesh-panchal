import { useEffect, useRef } from 'react';

const useReveal = () => {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        const observeAll = () => {
            node.querySelectorAll('.reveal:not(.is-visible)').forEach((item) => {
                observer.observe(item);
            });
        };

        observeAll();

        const mutationObserver = new MutationObserver(observeAll);
        mutationObserver.observe(node, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return ref;
};

export default useReveal;
