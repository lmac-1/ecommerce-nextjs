import { GetStaticProps } from 'next';
import StoreItem from '../../components/StoreItem';
import prisma from '../../lib/prisma';
import { DBProduct, Product } from '../../types/types';

type Props = {
  products: Product[];
};

export default function Products({ products }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 max-w-2xl mx-auto mt-6">
      {products.map((product) => (
        <StoreItem
          key={product.id}
          name={product.name}
          price={+product.price}
          id={product.id}
        />
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
      price: product.price.toString(),
    };
  });

  return {
    props: { products: modifiedProducts },
  };
};
