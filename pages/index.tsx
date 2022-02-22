import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
const HomePage = dynamic(() => import('pages/home'))

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Store</title>
        <meta name="description" content="Store" />
      </Head>

      <HomePage />
    </div>
  )
}

export default Home
