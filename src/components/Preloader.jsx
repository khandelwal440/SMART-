import { useEffect, useState } from 'react';

/** Amber split-curtain loader with the spinning ring and logo mark, like the original. */
export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const a = setTimeout(() => setLoaded(true), 50);
    const b = setTimeout(() => setGone(true), 2600);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      role="status"
      aria-label="Loading SmarTank"
      className={`fixed inset-0 z-[100000] transition-[visibility] delay-[1.8s] duration-[0.8s] ${loaded ? 'invisible' : ''}`}
    >
      <div
        className="absolute left-1/2 z-[201] -ml-[50px] -mt-[50px] h-[130px] w-[130px] rounded-full p-[30px] transition-all delay-1000 duration-1000"
        style={{ top: loaded ? '-100%' : '50%', opacity: loaded ? 0 : 1 }}
      >
        <span className="absolute inset-0 rounded-full border-[3px] border-white opacity-20" aria-hidden="true" />
        <span className="absolute inset-0 z-[2] animate-loader rounded-full border-[3px] border-transparent border-t-white" aria-hidden="true" />
        <img src="/images/preloader.png" alt="" className="relative" />
      </div>
      <div
        className="fixed top-0 z-[2] h-full w-1/2 bg-amber transition-all delay-[1.4s] duration-1000"
        style={{ left: loaded ? '-100%' : 0 }}
      />
      <div
        className="fixed top-0 z-[2] h-full w-1/2 bg-amber transition-all delay-[1.4s] duration-1000"
        style={{ right: loaded ? '-100%' : 0 }}
      />
    </div>
  );
}
