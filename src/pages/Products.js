
import React, { Fragment } from 'react';
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
import Filters from '../components/products/Filters';
import PageProducs from '../components/products/PageProducs';
const Products = () => {
  const { loading } = React.useContext(ProductContext);
  if (loading)
    return <Loading />
  return (
    <Fragment>
      <Filters />
      <PageProducs />
    </Fragment>
  );
}
export default Products