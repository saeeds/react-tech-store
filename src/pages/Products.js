
import React from 'react';
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList'
const Products = () => {
  const { loading, products, featured } = React.useContext(ProductContext);
  console.log(loading, products, featured);

  if (loading)
    return <Loading />
  return <ProductList title="our products" products={products} />;
}

export default Products