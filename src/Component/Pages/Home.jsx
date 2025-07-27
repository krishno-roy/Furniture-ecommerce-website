import React from 'react'
import Hero from '../Home/Hero'
import ProductFeture from '../Home/ProductFeture'
import Product from '../Home/Product'
import LimitedOffer from '../Home/LimitedOffer'
import FeaturedSection from '../Home/FeaturedSection'
import Elegantfurniture from '../Home/Elegantfurniture'
import Product2 from '../Home/product2'
import Testimonial from '../Home/Testimonial'
import Support from '../Home/Support'
import BlogList from './BlogList'
import DiscountBanner from '../Home/DiscountBanner'
import LogoSection from '../Home/LogoSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductFeture />
      <Product />
      <LimitedOffer />
      <Product />
      <FeaturedSection/>
      <Elegantfurniture/>
      <Product2/>
      <Testimonial/>
      <Support/>
      <BlogList/>
      <DiscountBanner/>
      <LogoSection/>
    </div>
  );
}

export default Home