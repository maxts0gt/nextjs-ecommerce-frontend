import { GetStaticProps } from 'next';
import Page from '../components/Page'
import React from 'react';
import ProductCard from '../components/ProductCard';
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
			<Page title="Indoor Plants">
				<ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					{products.map((product) => (
						<li key={product.id}>
							<ProductCard product={product} />
						</li>
					))}
				</ul>
			</Page>
		</>
	);
};

export default HomePage;
