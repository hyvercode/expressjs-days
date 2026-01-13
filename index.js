var healthRouter = require('./src/routes/health');

const express = require('express');
const app = express();

// Error handling middleware
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

// Health check route
app.use('/api/health', healthRouter);

app.get('/', (req, res) => {
  res.send('Hello Express!');
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});