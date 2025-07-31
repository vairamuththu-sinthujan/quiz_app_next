'use client'
import React, {useState} from "react";
import {QueryClient, QueryClientProvider,HydrationBoundary, hydrate} from "@tanstack/react-query";

interface ProvidersProps {
    children: React.ReactNode;
    dehydratedState?: unknown;
}

export function Providers ({ children, dehydratedState }: ProvidersProps) {
    const [queryClient] = useState(() => new QueryClient({defaultOptions: {queries:{
                staleTime: 5 * 60 * 1000,     // data is "fresh" for 5 minutes
                refetchOnWindowFocus: false,  // disable refetch on window focus
                refetchOnReconnect: false,
                refetchOnMount: false,
            }}}));

    if (dehydratedState) {
        hydrate(queryClient,dehydratedState)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                {children}
            </HydrationBoundary>
        </QueryClientProvider>
    )
}


