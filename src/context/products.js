import React from 'react'
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts, flattenProducts, paginate } from '../utils/helpers';
export const ProductContext = React.createContext();
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  //extra state values
  const [sorted, setSorted] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [filters, setFilters] = React.useState({
    search: '',
    category: 'all',
    shipping: false,
    price: 'all'
  });
  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then(response => {
      const featured = featuredProducts(response.data);
      const products = flattenProducts(response.data);
      setSorted(paginate(products));
      setProducts(products);
      setFeatured(flattenProducts(featured));
      setLoading(false);
    })
    return () => { }
  }, []);
  const changePage = index => {
    setPage(index);
  };
  const updateFilter = e => {
    console.log(e);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        sorted,
        page,
        filters,
        changePage,
        updateFilter
      }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider;