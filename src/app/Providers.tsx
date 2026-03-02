import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster as ReactHotToaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/lib/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster as SoonerToaster } from 'sonner';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                {children}
            </TooltipProvider>
            <SoonerToaster position="top-right" /> {/* sonner toast container */}
            <ReactHotToaster position="top-right" /> {/* react hot toast container */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};