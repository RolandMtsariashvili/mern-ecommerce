import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Adming',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    }
  ],
  products: [
    {
      name: 'Nike\'s Coat',
      category: 'Coats',
      image: 'https://via.placeholder.com/250x350',
      price: 110,
      brand: 'Nike',
      rating: 4.5,
      reviewsNum: 17,
      countInStock: 5,
      description: 'High Quality Nike Coat',
    },
    {
      name: 'Nike Slim trousers',
      category: 'trousers',
      image: 'https://via.placeholder.com/250x350',
      price: 78,
      brand: 'Nike',
      rating: 3.8,
      reviewsNum: 8,
      countInStock: 2,
      description: 'Brand New Slim Trousers',
    },
    {
      name: 'Zara\'s Shirt',
      category: 'Shirts',
      image: 'https://via.placeholder.com/250x350',
      price: 178,
      brand: 'Zara',
      rating: 4.8,
      reviewsNum: 21,
      countInStock: 0,
      description: 'Zara\'s skinny shirt',
    },
    {
      name: 'H&M Baseball Hat',
      category: 'hats',
      image: 'https://via.placeholder.com/250x350',
      price: 28,
      brand: 'H&M',
      rating: 4.0,
      reviewsNum: 14,
      countInStock: 2,
      description: 'Hood Quality Hat For Baseball Lovers',
    },
  ],
};

export default data;
