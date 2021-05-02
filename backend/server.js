import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mernStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get('/', (req, res) => {
  res.send('Server Started Working');
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter)

app.use((err, req, res, next) => {
  res.status(500).send({
    message: err.message,
  })
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started working on port ${port}`);
});