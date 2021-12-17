import { Container } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Container>{t('hello')}</Container>
    );
};

export default Home;
