import { HTMLAttributes } from 'react';

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  size = 'md',
  className = '',
  ...props
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const sizeStyles = {
    sm: {
      title: 'text-2xl sm:text-3xl',
      eyebrow: 'text-sm uppercase tracking-wider',
      description: 'text-base',
    },
    md: {
      title: 'text-3xl sm:text-4xl lg:text-5xl',
      eyebrow: 'text-sm uppercase tracking-wider',
      description: 'text-lg',
    },
    lg: {
      title: 'text-4xl sm:text-5xl lg:text-6xl',
      eyebrow: 'text-base uppercase tracking-wider',
      description: 'text-xl',
    },
  };
  
  return (
    <div className={`${alignStyles[align]} ${className}`} {...props}>
      {eyebrow && (
        <p className={`${sizeStyles[size].eyebrow} text-ckr-gold mb-3 font-semibold`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`${sizeStyles[size].title} font-bold text-ckr-ivory mb-4 leading-tight`}>
        {title}
      </h2>
      {description && (
        <p className={`${sizeStyles[size].description} text-ckr-light-gray max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
