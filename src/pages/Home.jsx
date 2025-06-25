import React from 'react'
import Navbar from '../components/Navbar'
import Catolog from '../components/Catolog'
import Slider from '../components/CarouselComponent'
import ProductsList from '../features/products/ProductsList'
import { Typography } from 'antd';
import Carousel from '../components/CarouselComponent'
import CarouselComponent from '../components/CarouselComponent'
import ConfiguratorSection from '../components/ConfiguratorSection'
import CatoologSection from '../components/CatoologSection'
import AboutSection from '../components/AboutSection'
import SupportSection from '../components/SupportSection'
import CustomerReviews from '../components/CustomerReviews'
import Footer from '../components/Footer'
const { Title } = Typography;

const Home = () => {
  return (
    <div className='mx-20'>
        <Navbar/>
        <Catolog/>
        <CarouselComponent/>
        <Title className='py-6' level={3}>Yangilari</Title>
        <ProductsList/>
        <Title className='py-6' level={3}>Eng yaxshi takliflar</Title>
        <ProductsList/>
        <ConfiguratorSection/>
        <CatoologSection/>
        <AboutSection/>
        <SupportSection/>
        <CustomerReviews/>
        <Footer/>
    </div>
  )
}

export default Home