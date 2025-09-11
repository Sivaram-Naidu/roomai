import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieRemoteProps {
  src: string; // URL to lottie json
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

const LottieRemote: React.FC<LottieRemoteProps> = ({ src, className, loop = true, autoplay = true, speed = 1 }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch(src, { cache: 'force-cache' })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to load animation: ${res.status}`);
        const json = await res.json();
        if (isMounted) setData(json);
      })
      .catch((err: any) => {
        if (isMounted) setError(err?.message || 'Failed to load animation');
      });
    return () => { isMounted = false; };
  }, [src]);

  if (error) {
    return <div className={`loading rounded-xl bg-gray-800/50 border border-gray-700 ${className || ''}`} />;
  }

  if (!data) {
    return <div className={`loading rounded-xl bg-gray-800/50 border border-gray-700 ${className || ''}`} />;
  }

  return (
    <Lottie animationData={data} loop={loop} autoplay={autoplay} className={className} style={{}} onDOMLoaded={(e) => {
      try { (e as any)?.currentTarget?.setSpeed?.(speed); } catch {}
    }} />
  );
};

export default LottieRemote;
