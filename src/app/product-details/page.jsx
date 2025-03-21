import AlsoLikeProducts from '@/components/AlsoLikeProducts'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'

const page = () => {
    return (
        <div>
            <Header />
            <ProductDetails />
            <AlsoLikeProducts />
            <Footer/>
        </div>
    )
}

export default page
