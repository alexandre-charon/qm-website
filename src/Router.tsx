import { Image, Link, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Link as ReachLink, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

const Router: FC = () => {
    const { t } = useTranslation();

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route
                    element={
                        <VStack pb={6}>
                            <Image boxSize={96} src="/assets/not-found.svg" />
                            <Text>{t('404.message')}</Text>
                            <Link as={ReachLink} fontSize="lg" to="/">{t('404.back_to_home')}</Link>
                        </VStack>
                    }
                    path="*"
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
