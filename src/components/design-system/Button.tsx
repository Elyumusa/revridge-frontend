import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {

        const variants = {
            primary: 'bg-primary text-primary-foreground hover:bg-[#006B62]',
            secondary: 'bg-accent text-accent-foreground hover:bg-[#b8de00]',
            outline: 'border border-primary bg-white text-primary hover:bg-primary hover:text-white',
            ghost: 'text-primary hover:bg-secondary',
            glass: 'border border-border bg-white/90 text-foreground hover:bg-white',
        };

        const sizes = {
            sm: 'h-9 px-3 text-xs rounded-lg',
            md: 'h-11 px-5 py-2 rounded-[10px]',
            lg: 'h-14 px-7 text-base rounded-[10px]',
            icon: 'h-10 w-10',
        };

        const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap font-semibold transition-[background-color,color,transform] duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px';

        return (
            <button
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
