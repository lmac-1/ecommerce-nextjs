import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucy&apos;s ecommerce with NextJS</title>
        <meta name="description" content="A basic ecommerce example built using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">Hello world!</h1>
      </main>
    </>
  )
}
