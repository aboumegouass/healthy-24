import { queryClientOptions } from '../utils/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

interface Props {
    children: ReactNode;
}

export const Providers = ({ children }: Props) => {
    const [queryClient] = useState(() => new QueryClient(queryClientOptions));
    const myColor: MantineColorsTuple = [
        "#0F5B74",
        "#117595",
        "#1990B7",
        "#1CA0CB",
        "#26B3E0",
        "#56CCF2",
        "#6ACFEF",
        "#7CCDE8",
        "#8DCEE3",
        "#ADDDEC"
    ]

    const theme = createTheme({
        primaryColor: 'myColor',
        colors: {
            myColor,
        }
    });
    return (
        <MantineProvider theme={theme}>
            <ModalsProvider>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </ModalsProvider>
        </MantineProvider>
    )
};