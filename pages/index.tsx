import Banner from '@component/modules/banner/Banner'
import Container from '@component/modules/container/Container'
import Context from '@component/modules/context/Context'
import Footer from '@component/modules/footer/Footer'
import Header from '@component/modules/header/Header'
import Logos from '@component/modules/logos/Logos'
import Subscribe from '@component/modules/subscribe/Subscribe'
import Templets from '@component/modules/templets/Templets'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Header />
  <Banner />
  <Logos />
  <Container />
  <Templets />
  <Context />
  <Subscribe />
  <Footer />
  </>
  )
}
