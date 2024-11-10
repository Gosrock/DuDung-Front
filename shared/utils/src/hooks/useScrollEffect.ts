import { useEffect, useRef } from 'react';

export const useScrollEffect = ({
  callback,
  threshold = 0,
}: {
  callback?: (scrollTop: number) => void;
  threshold?: number;
}) => {
  const currentScrollTop = useRef(0);
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const handler = () => {
      currentScrollTop.current = window.document.documentElement.scrollTop;
      if (currentScrollTop.current > threshold) {
        callback?.(currentScrollTop.current);
      }
    };
    window.addEventListener('scroll', handler, { passive: true });

    return () => window.removeEventListener('scroll', handler);
  }, [callback, threshold]);
};
