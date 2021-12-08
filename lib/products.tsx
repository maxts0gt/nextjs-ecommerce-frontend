import { fetchJson } from './api';


export interface Product {
	id: number;
	title: string;
	description: string;
	price: string;
}



export async function getProduct(id: string): Promise<Product> {

	const product = await fetchJson(`http://localhost:1337/products/${id}`);
	return stripProduct(product);
}

export async function getProducts(): Promise<Product[]> {
	const products = await fetchJson(`http://localhost:1337/products`);
	return products.map(stripProduct);
}

function stripProduct(product: any): Product {
	return {
		id: product.id,
		title: product.title,
		description: product.description,
		price: '$' + product.price.toFixed(2)
	};
}