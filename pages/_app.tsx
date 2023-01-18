import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartProvider>
  );
}
