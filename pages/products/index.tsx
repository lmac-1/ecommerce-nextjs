import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '../../lib/prisma';
import { DBProduct, Product } from '../../types/types';

type Props = {
  products: Product[];
};

export default function Products({ products }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 max-w-2xl mx-auto mt-6">
      {products.map((product) => (
        <div key={product.id} className="max-w-xs mx-auto hover:border p-1">
          <Link href={`/products/${product.id}`}>
            <Image
              src="https://picsum.photos/200"
              alt="Image of product"
              width="200"
              height="200"
            />
            <div className="font-mono text-center">
              <h2>{product.name}</h2>
              {/* todo: fix for 1dp */}
              <p className="text-xs">£{product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products: DBProduct[] = await prisma.product.findMany({});
  // Convert the price field to a string for each product
  const modifiedProducts: Product[] = products.map((product) => {
    return {
      ...product,
      price: product.price ? product.price.toString() : null,
    };
  });

  return {
    props: { products: modifiedProducts },
  };
};
