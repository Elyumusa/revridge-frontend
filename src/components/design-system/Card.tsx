import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'outline' | 'flat';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', padding = 'md', hoverEffect = false, children, ...props }, ref) => {

        const variants = {
            default: 'bg-card text-card-foreground border shadow-sm',
            glass: 'glass text-foreground shadow-glass border-white/10 dark:border-white/5',
            outline: 'bg-transparent border border-border text-foreground',
            flat: 'bg-muted/50 text-foreground border-none',
        };

        const paddings = {
            none: 'p-0',
            sm: 'p-4',
            md: 'p-6',
            lg: 'p-8',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-xl overflow-hidden transition-all duration-300',
                    variants[variant],
                    paddings[padding],
                    hoverEffect && 'hover-lift hover:shadow-lg',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5 mb-4", className)}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn("font-semibold leading-none tracking-tight text-lg", className)}
            {...props}
        />
    )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("pt-0", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center pt-4", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
