import React from 'react';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

/* ================================
 * TYPOGRAPHY COMPONENTS
 * ================================ */

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extraBold';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel;
    weight?: HeadingWeight;
    gradient?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level = 'h2', weight = 'bold', gradient = false, children, ...props }, ref) => {
        const Component = level;

        const sizes = {
            h1: "text-4xl sm:text-5xl lg:text-6xl tracking-tight",
            h2: "text-3xl sm:text-4xl tracking-tight",
            h3: "text-2xl sm:text-3xl tracking-tight",
            h4: "text-xl sm:text-2xl tracking-tight",
            h5: "text-lg sm:text-xl tracking-tight",
            h6: "text-base sm:text-lg tracking-tight",
        };

        const weights = {
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
            extraBold: "font-extrabold",
        };

        return (
            <Component
                ref={ref}
                className={cn(
                    "scroll-m-20",
                    sizes[level],
                    weights[weight],
                    gradient && "bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white animate-shimmer bg-[length:200%_auto]",
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);
Heading.displayName = 'Heading';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    muted?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, size = 'base', weight = 'normal', muted = false, children, ...props }, ref) => {
        const sizes = {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl",
        };

        const weights = {
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        };

        return (
            <p
                ref={ref}
                className={cn(
                    "leading-7",
                    sizes[size],
                    weights[weight],
                    muted && "text-muted-foreground",
                    className
                )}
                {...props}
            >
                {children}
            </p>
        );
    }
);
Text.displayName = 'Text';


/* ================================
 * ICON COMPONENT
 * ================================ */

interface IconProps extends LucideProps {
    icon: React.ComponentType<LucideProps>;
    wrapperClass?: string;
    animate?: boolean;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ icon: IconComponent, className, wrapperClass, animate = false, ...props }, ref) => {
        return (
            <span className={cn("inline-flex items-center justify-center", wrapperClass)}>
                <IconComponent
                    ref={ref}
                    className={cn(
                        animate && "transition-transform duration-300 hover:scale-110",
                        className
                    )}
                    {...props}
                />
            </span>
        );
    }
);
Icon.displayName = 'Icon';

export { Heading, Text, Icon };
