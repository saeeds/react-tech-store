
//import url from './URL';
//flatten
export const flattenProducts = (data) => {
  return data.map(item => {
    //claudinary
    let image = (item.image && item.image.url) || null;
    //local setup no deployment
    //let image = `${url}${item.image.url}`
    return {
      ...item, image
    }
  })
};
// helper functions
export const featuredProducts = (data) => {
  return data.filter((item) => {
    return item.featured === true;
  });
};


//paginate
export const paginate = (products) => {
  const itemsPerPage = 12;
  const numberOfPage = Math.ceil(products.length / itemsPerPage);
  // const newProducts = Array.from({ length: numberOfPage }, () => {
  //   return products.splice(0, itemsPerPage);
  // }) mutate the same array;
  const newProducts = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  })
  return newProducts;
}
