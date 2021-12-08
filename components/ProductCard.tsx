import Link from 'next/link'
import Image from 'next/image'
import { Product } from '../lib/products';


interface ProductCardProps {
    product: Product;
}



const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='border my-4 w-80 shadow hover:shadow-xl'>
            <Link href={`/products/${product.id}`}>
                <a>
                    <img src="https://dummyimage.com/320x240" alt="test" />
                    <div className="p-2 flex justify-between items-baseline">
                        <h2 className="text-lg font-semibold">
                            {product.title}
                        </h2>
                        <span>
                            {product.price}
                        </span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default ProductCard;