// Option 1: fetch products on the server side (getStaticProps)

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Title from '../components/Title';
import { getProducts, Product } from '../lib/products';

interface HomePageProps {
	products: Product[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
	console.log('[HomePage] getStaticProps()');
	const products = await getProducts();
	return {
		props: { products },
		revalidate: parseInt(process.env.REVALIDATE_SECONDS),
	};
};

const HomePage: React.FC<HomePageProps> = ({ products }) => {
	console.log('[HomePage - 1] render', products);
	return (
		<>
			<Head>
				<title>Next Shop</title>
			</Head>

			<main className='px-6 py-4'>
				<Title>Next Shop</Title>
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							<Link href={`/products/${product.id}`}>
								<a>{product.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
};

export default HomePage;
