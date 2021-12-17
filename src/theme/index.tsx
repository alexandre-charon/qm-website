import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: `Raleway, ${baseTheme.fonts?.body}`,
        heading: `Raleway, ${baseTheme.fonts?.heading}`,
    },
});

export default theme;
