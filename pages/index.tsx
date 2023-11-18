import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from './component/Header'
import Banner from './component/Banner'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='relative h-screen'>
    <Head>

    </Head>
    <Header />
    <main>
      <Banner/>
      <section>

      </section>
    </main>
   </div>
  )
}
