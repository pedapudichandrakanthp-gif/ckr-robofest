import { HTMLAttributes } from 'react';

interface BrandMarkProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'full' | 'short' | 'icon';
  showTagline?: boolean;
}

export default function BrandMark({ 
  variant = 'full', 
  showTagline = false,
  className = '',
  ...props 
}: BrandMarkProps) {
  if (variant === 'icon') {
    return (
      <div className={`flex items-center justify-center ${className}`} {...props}>
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-ckr-gold to-ckr-gold-dark rounded-lg transform rotate-3"></div>
          <div className="absolute inset-0 bg-ckr-charcoal rounded-lg"></div>
          <span className="relative text-ckr-gold font-bold text-xl tracking-tighter">CKR</span>
        </div>
      </div>
    );
  }

  if (variant === 'short') {
    return (
      <div className={`flex items-center gap-2 ${className}`} {...props}>
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-ckr-gold to-ckr-gold-dark rounded-md transform rotate-3"></div>
          <div className="absolute inset-0 bg-ckr-charcoal rounded-md"></div>
          <span className="relative text-ckr-gold font-bold text-lg tracking-tighter">CKR</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`} {...props}>
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-ckr-gold to-ckr-gold-dark rounded-lg transform rotate-3"></div>
          <div className="absolute inset-0 bg-ckr-charcoal rounded-lg"></div>
          <span className="relative text-ckr-gold font-bold text-xl tracking-tighter">CKR</span>
        </div>
        <div className="flex flex-col">
          <span className="text-ckr-ivory font-bold text-lg tracking-tight leading-none">
            CHANDRAKANTH
          </span>
          <span className="text-ckr-gold font-semibold text-sm tracking-widest leading-none mt-1">
            ROBOFEST
          </span>
        </div>
      </div>
      {showTagline && (
        <p className="text-ckr-light-gray text-xs tracking-wider mt-2 uppercase">
          Premium Robot Entertainment
        </p>
      )}
    </div>
  );
}
