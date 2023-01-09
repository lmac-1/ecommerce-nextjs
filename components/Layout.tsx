import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Lucy&apos;s ecommerce website</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
