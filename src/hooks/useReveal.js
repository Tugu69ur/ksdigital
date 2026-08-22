import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useReveal(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = root.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    gsap.set(items, { y: 48, opacity: 0 });

    const tween = gsap.to(items, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: root,
        start: 'top 82%',
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref]);
}
