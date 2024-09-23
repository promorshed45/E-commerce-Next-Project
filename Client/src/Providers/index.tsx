"use client";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'
import UserProvider from './user.Provider';



const Providers = ({ children }: { children: ReactNode }) => {

    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <ReactQueryDevtools initialIsOpen={false} />
                <Toaster position="top-center" expand={false} richColors />
                {children}
            </UserProvider>
        </QueryClientProvider>
    );
};

export default Providers;