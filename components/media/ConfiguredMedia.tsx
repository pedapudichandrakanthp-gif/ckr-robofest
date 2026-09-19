import type { MediaAsset } from '@/lib/media';

type ConfiguredMediaProps = {
  asset: MediaAsset;
  className?: string;
};

export default function ConfiguredMedia({ asset, className = '' }: ConfiguredMediaProps) {
  if (!asset.src) {
    return null;
  }

  if (asset.type === 'video') {
    return (
      <video
        className={`h-full w-full object-cover ${className}`}
        poster={asset.posterSrc ?? undefined}
        aria-label={asset.alt}
        muted
        autoPlay
        loop
        playsInline
        controls={false}
      >
        <source src={asset.src} />
      </video>
    );
  }

  return (
    <img
      src={asset.src}
      alt={asset.alt}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
