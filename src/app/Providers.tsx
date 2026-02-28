import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/lib/react-query';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster position="top-right" />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};