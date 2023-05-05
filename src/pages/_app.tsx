import { AppProps } from 'next/app';
import Head from 'next/head';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme, MantineProvider, Group, Button, Center, Anchor, Image, Box, Stack, Space
} from '@mantine/core';
import {Icon2fa, IconLoader} from "@tabler/icons-react";
import Link from "next/link";
import {useState} from "react";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const theme = useMantineTheme();
  const [openedA, setOpenedA] = useState(false);

    function openPage(page:string) {
        window.location.href = page;
    }

  return (

      <>
        <Head>
          <title>Page title</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'dark',
              colors: {
                'white': ['#ffffff', '#F8F9FA', '#F1F3F5', '#E9ECEF', '#DEE2E6'],
                'brand': ['#68858b', '#624b4c', '#EC7CC3', '#709aa0'],
              },
            }}
        >
          <AppShell
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
              header={
                <Header height={{ base: '8vh', md: '8vh' }} p="md">
                    <div>
                        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                            <Group position="apart" spacing='50px'>
                                <Link href='/'  style={{textDecoration: 'none'}}>
                                    <Image maw={'70px'} mah={'50px'} fit='fill' src="/modLogoNoBg.png" alt="logo modularify" />
                                </Link>
                                <Link href='https://github.com/modularify'  style={{textDecoration: 'none'}}>
                                    <Button variant="outline" color='white.3'>
                                        GitHub
                                    </Button>
                                </Link>
                            </Group>
                        </MediaQuery>

                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <div>
                                <Navbar p="md" fixed hiddenBreakpoint="1000000000" hidden={!openedA} width={{ sm: '100%', md: '0' }}>
                                    <Center>
                                        <Stack>
                                            <Space h="50px" />
                                            <Center><Text onClick={() =>{openPage("/")}} fz={'30px'}>Home</Text></Center>
                                            <Space h="md" />
                                            <Center><Text onClick={() =>{openPage("/about-me")}} fz={'30px'}>About me</Text></Center>
                                            <Space h="md" />
                                            <Center><Text onClick={() =>{openPage("/projects")}} fz={'30px'}>Projects</Text></Center>
                                        </Stack>
                                    </Center>
                                </Navbar>
                            <Box>
                                <Group position="apart">
                                    <Link href='/'  style={{textDecoration: 'none'}}>
                                        <Image maw={'70px'} mah={'50px'} src="/modLogoNoBg.png" alt="logo modularify" />
                                    </Link>
                                    <IconLoader onClick={() => setOpenedA((o) => !o)}/>
                                </Group>
                            </Box>
                            </div>
                        </MediaQuery>
                    </div>
                </Header>
              }
          >
          <Component {...pageProps} />
          </AppShell>
        </MantineProvider>
      </>
  );
}
