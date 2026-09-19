import { HTMLAttributes, forwardRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  centered?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', centered = true, className = '', children, ...props }, ref) => {
    const sizeStyles = {
      sm: 'max-w-ckr-container-sm',
      md: 'max-w-ckr-container-md',
      lg: 'max-w-ckr-container-lg',
      xl: 'max-w-ckr-container-xl',
      '2xl': 'max-w-ckr-container-2xl',
      full: 'max-w-full',
    };
    
    const centerStyles = centered ? 'mx-auto px-4 sm:px-6 lg:px-8' : 'px-4 sm:px-6 lg:px-8';
    
    return (
      <div
        ref={ref}
        className={`${sizeStyles[size]} ${centerStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
