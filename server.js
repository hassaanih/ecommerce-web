const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// setup
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
