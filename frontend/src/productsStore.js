const productsArray = [
  {
    id: 'price_1LwlMSApfUoZorgCNjN1cxNo',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: 'price_1LwlQPApfUoZorgCZIc8L9FV',
    title: 'Sunglasses',
    price: 9.99,
  },
  {
    id: 'price_1LwlTKApfUoZorgCHzHkHKUD',
    title: 'Camera',
    price: 30.99,
  },
];

const getProductData = (id) => {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log(`Product data does not exist for ID:${id}`);
    return undefined;
  }

  return productData;
};

export { productsArray, getProductData };
