
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

