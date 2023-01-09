import { GetServerSideProps } from 'next';
import Image from 'next/image';
import prisma from '../../lib/prisma';
import { DBProduct, Product } from '../../types/types';

type Props = {
  product?: Product;
  errors?: string;
};

export default function ProductPage({ product, errors }: Props) {
  if (errors) {
    return <h1>Sorry, an error has occurred</h1>;
  }
  if (!product) {
    return <h1>No product found</h1>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mx-auto">
      <Image
        src="https://picsum.photos/200"
        alt="Image of product"
        width="500"
        height="500"
        className="mx-auto"
      />
      <div className="text-center md:text-left">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>£{product.price}</p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id ? params.id[0] : '';
    const product: DBProduct | null = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    const modifiedProduct: Product | null = product
      ? {
          ...product,
          price: product.price?.toString(),
        }
      : null;
    return { props: { product: modifiedProduct } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
