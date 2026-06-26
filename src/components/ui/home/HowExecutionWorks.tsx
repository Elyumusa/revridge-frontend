import React from 'react';
import { Heading, Text } from '@/components/design-system';
import { cn } from '@/lib/utils';
import {
    PenLine,
    Send,
    CheckCircle2,
    Building2,
    Eye,
    Wallet,
} from 'lucide-react';

interface Stage {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;
}

/**
 * The order lifecycle, straight from the Broker Integration Layer spec:
 * a user places an order -> it is routed to a licensed broker ->
 * the broker executes it on the LuSE -> the confirmed fill updates the portfolio.
 */
const orderStages: Stage[] = [
    {
        title: 'You place an order',
        description:
            'Choose a LuSE stock, enter buy or sell and the quantity. Your order intent is captured in Revridge.',
        icon: PenLine,
    },
    {
        title: 'We route it to a licensed broker',
        description:
            'Revridge sends your order to a licensed broker, who executes it manually on the Lusaka Securities Exchange (LuSE).',
        icon: Send,
    },
    {
        title: 'Broker confirms the trade',
        description:
            'Once executed, the broker returns the fill — price, time, and any fees. Your portfolio updates from that confirmation, not an estimate.',
        icon: CheckCircle2,
    },
];

/**
 * What Revridge owns vs. what the broker owns. Mirrors §1 of the pivot spec
 * ("Revridge becomes the digital front door… Brokers retain trade execution").
 */
const roles = [
    {
        label: 'Revridge handles',
        icon: Building2,
        accent: 'text-primary',
        items: [
            'Your investing experience',
            'Investor onboarding & KYC',
            'Order creation and tracking',
            'Portfolio visualization',
            'Investment education',
        ],
    },
    {
        label: 'Licensed brokers handle',
        icon: Wallet,
        accent: 'text-emerald-500',
        items: [
            'Trade execution on the LuSE',
            'Regulatory compliance',
            'Custody of your securities',
            'Settlement',
            'Market interaction',
        ],
    },
];

interface HowExecutionWorksProps {
    /** Optional id so the section can be linked to (e.g. from FAQ / footer). */
    id?: string;
    /** Hide the "Who does what" roles block (use on tight pages). */
    showRoles?: boolean;
    className?: string;
}

const HowExecutionWorks: React.FC<HowExecutionWorksProps> = ({
    id = 'how-execution-works',
    showRoles = true,
    className,
}) => {
    return (
        <section
            id={id}
            className={cn(
                'w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden',
                className,
            )}
        >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px]" />

            <div className="container px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-14 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                        <Eye size={16} />
                        <span>Full transparency, every step</span>
                    </div>
                    <Heading level="h2" className="text-4xl md:text-5xl font-bold tracking-tight">
                        How your order becomes an investment
                    </Heading>
                    <Text size="lg" className="max-w-2xl text-muted-foreground">
                        Revridge is not a broker. We're your digital front door to the LuSE — you place
                        the order, a licensed broker executes it, and you see every stage in real time.
                    </Text>
                </div>

                {/* Order lifecycle stages */}
                <div className="grid gap-8 md:grid-cols-3 mb-14">
                    {orderStages.map((stage, index) => (
                        <div
                            key={index}
                            className="relative animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Connector arrow (desktop only) */}
                            {index < orderStages.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
                            )}

                            <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                                {/* Step badge */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold shadow-lg">
                                        {index + 1}
                                    </div>
                                    <stage.icon className="text-primary" size={24} />
                                </div>

                                <Heading level="h3" className="text-xl font-bold mb-2">
                                    {stage.title}
                                </Heading>
                                <Text className="text-muted-foreground leading-relaxed">
                                    {stage.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Status pill row: the lifecycle a user sees in-app */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                    {['Submitted', 'Sent to broker', 'Executed'].map((label, i) => (
                        <React.Fragment key={label}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium">
                                <span className={cn('w-2 h-2 rounded-full', i === 0 && 'bg-blue-500', i === 1 && 'bg-amber-500', i === 2 && 'bg-emerald-500')} />
                                {label}
                            </span>
                            {i < 2 && <span className="text-muted-foreground">→</span>}
                        </React.Fragment>
                    ))}
                </div>
                <Text className="text-center text-sm text-muted-foreground mb-16">
                    You'll always know what stage your investment is in.
                </Text>

                {/* Who does what */}
                {showRoles && (
                    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                        {roles.map((role) => (
                            <div
                                key={role.label}
                                className="bg-card border border-border rounded-2xl p-6"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={cn('w-10 h-10 rounded-lg bg-secondary flex items-center justify-center', role.accent)}>
                                        <role.icon size={20} />
                                    </div>
                                    <Heading level="h3" className="text-lg font-bold">
                                        {role.label}
                                    </Heading>
                                </div>
                                <ul className="space-y-2">
                                    {role.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground">
                                            <span className={cn('mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-current', role.accent)} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HowExecutionWorks;
