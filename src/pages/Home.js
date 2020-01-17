import React, { Fragment } from "react";
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/Products/FeaturedProducts';
const Home = () => {
  return <Fragment>
    <Hero>
      <Link to='/products' className="btn btn-primary btn-hero">
        our products
      </Link>
    </Hero>
    <FeaturedProducts />
  </Fragment>;
}
export default Home;