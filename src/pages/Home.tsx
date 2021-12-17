/* eslint-disable @typescript-eslint/no-unused-vars */
import { Center, Container, Heading, HStack, Image, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    const illustrationsWidth = 64;

    return (
        <Center>
            <Container border="1px solid black" boxSize="calc(100% - 2 * (4px * 6))" m={6} maxW="min(100%, 588px)" p={6}>
                <VStack spacing={20}>
                    <Wrap justify="center" spacing={6} textAlign={{ base: 'center', md: 'left' }}>
                        <Image boxSize={{ base: 16, md: 24 }} src="logo192.png" />
                        <Heading><Trans i18nKey="title" /></Heading>
                    </Wrap>
                    <Text><Trans i18nKey="intro" /></Text>
                    <VStack align="flex-start" spacing={6}>
                        <Heading fontSize="2xl">{t('company.title')}</Heading>
                        <Text><Trans i18nKey="company.content" /></Text>
                    </VStack>
                    <Center boxSize="full">
                        <Image h="auto" src="/assets/company.svg" w={illustrationsWidth} />
                    </Center>
                    <VStack align="flex-start" spacing={6}>
                        <Heading fontSize="2xl">{t('job_sheet.title')}</Heading>
                        <Text><Trans i18nKey="job_sheet.content" /></Text>
                    </VStack>
                    <Center boxSize="full">
                        <Image h="auto" src="/assets/dev.svg" w={illustrationsWidth} />
                    </Center>
                    <VStack align="flex-start" spacing={6}>
                        <Heading fontSize="2xl">{t('conclusion.title')}</Heading>
                        <Text><Trans i18nKey="conclusion.content" /></Text>
                    </VStack>
                    <Center boxSize="full">
                        <Image h="auto" src="/assets/end.svg" w={illustrationsWidth} />
                    </Center>
                </VStack>
            </Container>
        </Center>
    );
};

export default Home;
