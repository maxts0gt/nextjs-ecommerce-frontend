import { GetStaticPaths, GetStaticProps } from 'next';
import { ApiError } from '../../lib/api';
import Head from 'next/head';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import Title from '../../components/Title';
import { getProduct, getProducts, Product } from '../../lib/products';

interface ProductPageParams extends ParsedUrlQuery {
    id: string;
}

interface ProductPageProps {
    product: Product;
}

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
    const products = await getProducts();
    return {
        paths: products.map((product) => ({
            params: { id: product.id.toString() },
        })),
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps<
    ProductPageProps,
    ProductPageParams
> = async ({ params: { id } }) => {
    try {
        const product = await getProduct(id);
        return {
            props: { product },
            revalidate: 5 * 60,
        };
    } catch (err) {
        if (err instanceof ApiError && err.status === 404) {
            return { notFound: true }
        }
        throw err;
    }

};

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
    return (
        <>
            <Head>
                <title>Id</title>
            </Head>
            <main>
                <Title>{product.title}</Title>
                <div className='flex flex-col lg:flex-row'>
                    <div>
                        <Image src={product.pictureUrl} alt='' width={640} height={480} />
                    </div>
                    <div className="flex-1 lg:ml-4">
                        <p>{product.description}</p>
                        <p className='text-lg font-bold mt-2'>{product.price}</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProductPage;
