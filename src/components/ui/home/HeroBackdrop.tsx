import { useEffect, useRef } from 'react';

// The hero is tall (headline plus the phone cards), so the ribbon is a stack of
// bands spread over its full height; a spotlight anywhere then lands on words.
const bands = [
  { key: 'learn-a', text: 'LEARN · INVEST · GROW · LEARN · INVEST · GROW ·' },
  { key: 'wealth-a', text: 'WEALTH · WEALTH · WEALTH · WEALTH · WEALTH · WEALTH ·' },
  { key: 'zambia-a', text: 'BUILT IN ZAMBIA · BUILT IN ZAMBIA · BUILT IN ZAMBIA ·' },
  { key: 'learn-b', text: 'GROW · LEARN · INVEST · GROW · LEARN · INVEST ·' },
  { key: 'wealth-b', text: 'WEALTH · WEALTH · WEALTH · WEALTH · WEALTH · WEALTH ·' },
  { key: 'zambia-b', text: 'BUILT IN ZAMBIA · BUILT IN ZAMBIA · BUILT IN ZAMBIA ·' },
  { key: 'learn-c', text: 'INVEST · GROW · LEARN · INVEST · GROW · LEARN ·' },
];

/** One set of three tilted bands. Each band holds its text twice so the slide
 *  animation can loop at exactly -100% without a visible seam. */
function Ribbon({ lit }: { lit?: boolean }) {
  return (
    <div className={`hero-ribbon ${lit ? 'hero-ribbon--lit' : 'hero-ribbon--base'}`} aria-hidden="true">
      {bands.map(({ key, text }, index) => (
        <div
          key={key}
          className={`hero-band${index % 2 ? ' hero-band--reverse' : ''}`}
          style={{ top: `${index * 14.5 - 1}%` }}
        >
          <span>{text}</span>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  lime: boolean;
}

const LIME = '202,243,0';
const WHITE = '255,255,255';
const LINK_DIST2 = 12000;
const SPOT_R2 = 26000;

/**
 * Hero backdrop: outlined words slide behind a field of drifting points.
 * The pointer lights the words lime under a soft spotlight and pulls the
 * points into a cluster that links up — a connection forming. Decorative only:
 * aria-hidden, no text a reader needs, and nothing here shows prices, returns
 * or counts (PRODUCT.md).
 *
 * Pointer events are read from the parent <section> so the headline and store
 * buttons stay fully clickable. Touch has no hover, so on phones the points
 * simply drift. Reduced motion draws one still frame and stops the ribbon.
 */
export default function HeroBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const stage = root?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!root || !canvas || !stage || !ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = false;
    let spot = 0;
    const points: Point[] = [];
    const mouse = { x: -999, y: -999, on: false };

    function seed() {
      const target = Math.round(Math.min(95, (w * h) / 5200));
      while (points.length < target) {
        points.push({
          x: w * (0.1 + Math.random() * 0.9),
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -(0.12 + Math.random() * 0.35),
          r: 1.4 + Math.random() * 2,
          lime: Math.random() < 0.24,
        });
      }
      points.length = target;
    }

    function size() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function frame() {
      if (!ctx || !root) return;
      ctx.clearRect(0, 0, w, h);

      for (const a of points) {
        a.x += a.vx;
        a.y += a.vy;
        if (mouse.on) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < SPOT_R2) {
            const d = Math.sqrt(d2) + 1;
            const pull = (1 - d2 / SPOT_R2) * 0.55;
            a.x -= (dx / d) * pull;
            a.y -= (dy / d) * pull;
            // Keep a small clear circle so the cluster forms around the cursor
            // instead of collapsing onto it.
            if (d < 46) {
              a.x += (dx / d) * 1.1;
              a.y += (dy / d) * 1.1;
            }
          }
        }
        if (a.y < -10) {
          a.y = h + 10;
          a.x = w * (0.1 + Math.random() * 0.9);
        }
        if (a.x < w * 0.06) a.x = w + 5;
        if (a.x > w + 10) a.x = w * 0.06;
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const ax = a.x - b.x;
          const ay = a.y - b.y;
          const dd = ax * ax + ay * ay;
          if (dd >= LINK_DIST2) continue;
          let near = 0;
          if (mouse.on) {
            const mx = (a.x + b.x) / 2 - mouse.x;
            const my = (a.y + b.y) / 2 - mouse.y;
            near = Math.max(0, 1 - (mx * mx + my * my) / 30000);
          }
          const fall = 1 - dd / LINK_DIST2;
          ctx.strokeStyle = `rgba(${a.lime || b.lime || near > 0.2 ? LIME : WHITE},${0.26 * fall + near * 0.5 * fall})`;
          ctx.lineWidth = 1 + near;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const a of points) {
        let glow = 0;
        if (mouse.on) {
          const gx = a.x - mouse.x;
          const gy = a.y - mouse.y;
          glow = Math.max(0, 1 - (gx * gx + gy * gy) / SPOT_R2);
        }
        ctx.fillStyle =
          a.lime || glow > 0.25
            ? `rgba(${LIME},${0.85 + glow * 0.15})`
            : `rgba(${WHITE},.65)`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r + glow * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      spot += ((mouse.on ? 1 : 0) - spot) * 0.12;
      root.style.setProperty('--spot', spot.toFixed(3));

      if (visible && !reduce) raf = requestAnimationFrame(frame);
    }

    function move(event: PointerEvent) {
      if (!root || !stage) return;
      const rect = stage.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.on = event.pointerType !== 'touch';
      root.style.setProperty('--mx', `${mouse.x}px`);
      root.style.setProperty('--my', `${mouse.y}px`);
    }
    function leave() {
      mouse.on = false;
      mouse.x = mouse.y = -999;
    }

    stage.addEventListener('pointermove', move);
    stage.addEventListener('pointerleave', leave);

    const resize = new ResizeObserver(() => {
      size();
      frame();
    });
    resize.observe(canvas);

    // Only animate while the hero is on screen.
    const watch = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(frame);
    });
    watch.observe(canvas);

    size();
    frame();

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      watch.disconnect();
      stage.removeEventListener('pointermove', move);
      stage.removeEventListener('pointerleave', leave);
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-backdrop" aria-hidden="true">
      <Ribbon />
      <Ribbon lit />
      <div className="hero-backdrop__fade" />
      <canvas ref={canvasRef} className="hero-backdrop__canvas" />
    </div>
  );
}
