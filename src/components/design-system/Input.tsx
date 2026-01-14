import React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, helperText, startIcon, endIcon, id, ...props }, ref) => {
        const inputId = id || React.useId();

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                    </label>
                )}

                <div className="relative group">
                    {startIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                            {startIcon}
                        </div>
                    )}

                    <input
                        type={type}
                        className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                            startIcon && "pl-10",
                            endIcon && "pr-10",
                            error && "border-destructive focus-visible:ring-destructive",
                            className
                        )}
                        ref={ref}
                        id={inputId}
                        {...props}
                    />

                    {endIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            {endIcon}
                        </div>
                    )}
                </div>

                {error && (
                    <p className="text-[0.8rem] font-medium text-destructive flex items-center animate-slide-in-left">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {error}
                    </p>
                )}

                {!error && helperText && (
                    <p className="text-[0.8rem] text-muted-foreground">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);
Input.displayName = 'Input';

export { Input };
