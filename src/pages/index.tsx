//
//  index.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { VStack, Center } from '@chakra-ui/react';
import Hero from '../components/Hero';
import RouteSideCar from '../components/RoutesSideBar';

import {GetServerSideProps} from 'next';
import Head from 'next/head';


const Index: React.FC= () => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Home Page"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
                <meta property="og:description"
                    content="home page" />
                <title> { 'title' } </title>
            </Head>
            <header className="App-header">
                <Center>
                    <VStack>
                        <RouteSideCar/>
                        <Hero title={'Next-App-Kit'}/>
                    </VStack>
                </Center>
            </header>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};

export default Index;
