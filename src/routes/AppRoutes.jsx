import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import ProductsList from '../features/products/ProductsList'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<ProductDetail/>} />
        </Routes>
    )
}

export default AppRoutes