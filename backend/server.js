import express from 'express';
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Server Started Working');
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Doesn\'t exists' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started working on port ${port}`);
});