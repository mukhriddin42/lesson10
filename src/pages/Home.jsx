import React from 'react'
import Navbar from '../components/Navbar'
import Catolog from '../components/Catolog'
import Slider from '../components/Slider'
import ProductsList from '../features/products/ProductsList'
import { Typography } from 'antd';
const { Title } = Typography;

const Home = () => {
  return (
    <div className='mx-20'>
        <Navbar/>
        <Catolog/>
        <Slider/>
        <Title className='py-6' level={3}>Yangilari</Title>
        <ProductsList/>
        <Title className='py-6' level={3}>Eng yaxshi takliflar</Title>
        <ProductsList/>
    </div>
  )
}

export default Home