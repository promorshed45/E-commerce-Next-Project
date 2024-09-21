"use client";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ReactNode, useState } from 'react';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'



const Providers = ({ children }: { children: ReactNode }) => {

    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster position="top-center" expand={false} richColors />
            {children}
        </QueryClientProvider>
    );
};

export default Providers;