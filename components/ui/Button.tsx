import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, href, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ckr-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ckr-black disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';
    
    const variantStyles = {
      primary: 'bg-ckr-gold text-ckr-black hover:bg-ckr-gold-light shadow-lg hover:shadow-xl',
      secondary: 'bg-ckr-charcoal text-ckr-ivory hover:bg-ckr-dark-gray border border-ckr-gold/30',
      outline: 'bg-transparent text-ckr-gold border-2 border-ckr-gold hover:bg-ckr-gold/10',
      ghost: 'bg-transparent text-ckr-ivory hover:bg-ckr-charcoal',
    };
    
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    const widthStyles = fullWidth ? 'w-full' : '';
    
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;
    
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
