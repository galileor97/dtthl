import Layout from '../components/Layout.js'
import '../styles/globals.css'
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Head>
        <title>DTTH Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
