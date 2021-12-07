import Head from 'next/head';
import React from 'react';
import Title from '../components/Title';

const HomePage: React.FC = () => {
	return (
		<>
			<Head>
				<title>Next Shop</title>
			</Head>
			<main className='px-6 py-6'>
				<Title>Next Shop</Title>

				<p>[TODO: display products]</p>
			</main>
		</>
	);
};

export default HomePage;
