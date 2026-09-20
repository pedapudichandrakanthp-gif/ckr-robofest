'use client';

import { useState, useRef, useEffect } from 'react';
import type { MediaAsset } from '@/lib/media';

type ConfiguredMediaProps = {
  asset: MediaAsset;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
};

export default function ConfiguredMedia({ asset, className = '', onLoad, onError }: ConfiguredMediaProps) {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!asset.src) {
    return null;
  }

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleLoad = () => {
    onLoad?.();
  };

  if (asset.type === 'video') {
    if (hasError && asset.posterSrc) {
      return (
        <img
          src={asset.posterSrc}
          alt={asset.alt}
          className={`h-full w-full object-cover ${className}`}
        />
      );
    }

    return (
      <video
        ref={videoRef}
        className={`h-full w-full object-cover ${className}`}
        poster={asset.posterSrc ?? undefined}
        aria-label={asset.alt}
        muted
        autoPlay
        loop
        playsInline
        controls={false}
        onError={handleError}
        onLoadedData={handleLoad}
      >
        <source src={asset.src} type="video/mp4" />
      </video>
    );
  }

  if (hasError) {
    return null;
  }

  return (
    <img
      src={asset.src}
      alt={asset.alt}
      className={`h-full w-full object-cover ${className}`}
      onError={handleError}
      onLoad={handleLoad}
    />
  );
}
