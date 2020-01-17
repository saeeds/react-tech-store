import React from 'react'
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts, flattenProducts } from '../utils/helpers';

export const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then(response => {
      const featured = featuredProducts(response.data);
      const products = flattenProducts(response.data);
      setProducts(products);
      setFeatured(flattenProducts(featured));
      setLoading(false);
    })
    return () => {

    }
  }, [])
  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;