import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import ProductCard from '../components/ProductCard';
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
		revalidate: 5 * 60,
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
				<ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
					{products.map((product) => (
						<li key={product.id}>
							<ProductCard product={product} />
						</li>
					))}
				</ul>
			</main>
		</>
	);
};

export default HomePage;
