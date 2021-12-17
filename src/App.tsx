import './i18n/config';
import './theme/style.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';

import { ChakraProvider } from '@chakra-ui/react';

import Router from './Router';
import theme from './theme';

const App = () => (
    <ChakraProvider theme={theme}>
        <Router />
    </ChakraProvider>
);

export default App;
