import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const labelRef= useRef(null);
  const wrapRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const ring= useRef({ x: -200, y: -200 });
  const raf = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setShow(true);

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left  = `${e.clientX}px`;
        dotRef.current.style.top   = `${e.clientY}px`;
      }
    };

    const lerp = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      if (labelRef.current) {
        labelRef.current.style.left = `${ring.current.x}px`;
        labelRef.current.style.top  = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(lerp);
    };

    const over = (e) => {
      const el = e.target.closest('[data-cursor], a, button, .project-card');
      if (!el || !wrapRef.current) return;
      const label = el.dataset.cursor || (el.classList.contains('project-card') ? 'VIEW' : '');
      wrapRef.current.classList.toggle('cursor-active', !!label);
      if (labelRef.current) labelRef.current.textContent = label;
    };

    const out = (e) => {
      if (!e.relatedTarget && wrapRef.current) {
        wrapRef.current.classList.remove('cursor-active');
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout',  out);
    raf.current = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout',  out);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!show) return null;

  return (
    <div ref={wrapRef}>
      <div ref={dotRef}   className="cursor-dot" />
      <div ref={ringRef}  className="cursor-ring" />
      <div ref={labelRef} className="cursor-label" />
    </div>
  );
};

export default CustomCursor;
