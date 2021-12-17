import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        background: '#E5E5E5',
    },
    fonts: {
        body: `Raleway, ${baseTheme.fonts?.body}`,
        heading: `Raleway, ${baseTheme.fonts?.heading}`,
    },
    styles: {
        global: {
            body: {
                color: 'gray.500',
            },
            heading: {
                color: 'gray.700',
            },
        },
    },
});

export default theme;
