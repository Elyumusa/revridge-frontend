import React, { useState } from 'react';
import { Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Input, Button, Heading, Text, Card } from '@/components/design-system';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { parseApiError, getEmailValidationError, getEmailSignupSuccessMessage } from '@/utils/errorHandler';

interface StayUpdatedProps {
    stayUpdatedSectionRef?: React.RefObject<HTMLElement>;
}

const StayUpdated: React.FC<StayUpdatedProps> = ({ stayUpdatedSectionRef }) => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const submitEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email
        const validationError = getEmailValidationError(email);
        if (validationError) {
            setStatus('error');
            setMessage(validationError);
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
            const response = await axios.post(`${mainURL}/email_list/`, {
                email,
                source: 'homepage'
            });

            if (response.status === 201) {
                setStatus('success');
                setMessage(getEmailSignupSuccessMessage(email));
                setEmail('');
            }
        } catch (error: any) {
            setStatus('error');
            setMessage(parseApiError(error));
        }
    };

    return (
        <section
            ref={stayUpdatedSectionRef}
            className="w-full py-24 relative overflow-hidden flex items-center justify-center bg-zinc-950 text-white"
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950 opacity-80" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">

                    <div className="p-4 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
                        <Mail className="h-8 w-8 text-white" />
                    </div>

                    <div className="space-y-4">
                        <Heading level="h2" className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                            Stay ahead of the curve.
                        </Heading>
                        <Text className="text-zinc-400 text-lg max-w-lg mx-auto">
                            Join our exclusive waiting list to receive early access, market insights, and updates on our launch.
                        </Text>
                    </div>

                    <Card variant="glass" className="w-full max-w-md p-2 bg-white/5 border-white/10 shadow-2xl">
                        <form onSubmit={submitEmail} className="flex flex-col sm:flex-row gap-2 p-1">
                            <div className="relative flex-1">
                                <Input
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-12 bg-transparent border-transparent focus:border-transparent focus:ring-0 text-white placeholder:text-zinc-500 pl-4"
                                    disabled={status === 'loading' || status === 'success'}
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="h-12 px-8 rounded-lg bg-white text-black hover:bg-zinc-200 font-semibold transition-all"
                                disabled={status === 'loading' || status === 'success'}
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="animate-spin h-5 w-5" />
                                ) : status === 'success' ? (
                                    <CheckCircle className="h-5 w-5" />
                                ) : (
                                    "Subscribe"
                                )}
                            </Button>
                        </form>
                    </Card>

                    <div className="h-6">
                        <AnimatePresence mode="wait">
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center text-green-400 gap-2"
                                >
                                    <CheckCircle size={16} />
                                    <span className="text-sm font-medium">{message}</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center text-red-400 gap-2"
                                >
                                    <AlertCircle size={16} />
                                    <span className="text-sm font-medium">{message}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StayUpdated;
