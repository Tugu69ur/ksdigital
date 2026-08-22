import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDone(true);
      return;
    }

    const state = { n: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: () => setDone(true),
        });
      },
    });

    tl.to(state, {
      n: 100,
      duration: 1.35,
      ease: 'power2.inOut',
      onUpdate: () => {
        const v = Math.round(state.n);
        if (countRef.current) countRef.current.textContent = String(v).padStart(3, '0');
        if (barRef.current) barRef.current.style.width = `${state.n}%`;
      },
    });

    return () => tl.kill();
  }, []);

  if (done) return null;

  return (
    <div className="preloader" ref={rootRef} aria-hidden="true">
      <div className="preloader__mark">KS</div>
      <div className="preloader__row">
        <span ref={countRef} className="preloader__count">000</span>
        <div className="preloader__track">
          <div className="preloader__bar" ref={barRef} />
        </div>
      </div>
    </div>
  );
}
