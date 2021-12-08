import Head from "next/head";
import Title from "./Title";
import React from 'react';

interface PageProps {
    title: string;
}


const Page: React.FC<PageProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title} - Next Shop</title>
            </Head>
            <main>
                <Title>{title}</Title>
                {children}
            </main>
        </>
    )
}

export default Page