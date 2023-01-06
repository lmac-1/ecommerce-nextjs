import prisma from '../../lib/prisma';

export default function Products() {
  return <h1>Hello product page</h1>;
}

export async function getStaticProps() {
  const products = await prisma.product.findMany({});
  console.log(products);

  return {
    props: { products },
  };
}
