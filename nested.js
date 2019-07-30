const product = {
  id: 100,
  name: 'shirt',
  size: {
    small: 10,
    medium: 20,
  },
  price: 100,
};

const selectedSize = 'small';
const quantity = 1;

product.size[selectedSize] = product.size[selectedSize] - quantity;

console.log(product);
