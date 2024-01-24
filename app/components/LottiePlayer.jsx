import {useEffect} from 'react';

export function LottiePlayer({src}) {
  const hasDocument = typeof document !== 'undefined';
  useEffect(() => {
    if (hasDocument) {
      import('@lottiefiles/lottie-player');
    }
  }, [hasDocument]);
  return (
    <lottie-player
      autoplay
      loop
      mode="normal"
      src={typeof src === 'string' ? src : JSON.stringify(src)}
    />
  );
}
