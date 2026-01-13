const healthRouter = require('./src/routes/health');
const productRouter = require('./src/routes/product');

const express = require('express');
const app = express();

// Error handling middleware
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

// Health check route
app.use('/api/health', healthRouter);
// Product routes
app.use('/api/products', productRouter);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello Express!');
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});