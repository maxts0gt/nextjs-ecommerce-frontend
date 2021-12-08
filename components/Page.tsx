import Head from "next/head";
import Title from "./Title";
import React from 'react';
import NavBar from "./NavBar";

interface PageProps {
    title: string;
}


const Page: React.FC<PageProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title} - Next Shop</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main>
                <Title>{title}</Title>
                {children}
            </main>
        </>
    )
}

export default Page