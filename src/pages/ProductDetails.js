
import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  const product = products.find(item => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />
  } else {
    const { image: { url }, title, price, description } = product;
    return (<section className="single-product-image">
      <img src={url} alt={title} className="single-product-image" />
      <article>
        <h1>${title}</h1>
        <h2>${price}</h2>
        <p>${description}</p>
        <button className="btn btn-primary btn-block" onClick={
          () => {
            //add to cart
            history.push('/cart');
          }
        }>add to cart</button>
      </article>
    </section>);
  }

}

export default ProductDetails;