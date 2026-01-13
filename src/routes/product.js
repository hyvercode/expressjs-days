const express = require('express');
const router = express.Router();

// Product list route
router.get('/', (req, res) => {
  res.json([
    { id: '001', name: 'Sample Product' },
    { id: '002', name: 'Another Product' },
    { id: '003', name: 'Third Product' }
  ]);
});

// Product detail route
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  res.json({ id: productId, name: `Product ${productId}` });
});

// Create new product route
router.post('/', (req, res) => {
  const newProduct = req.body;
  // In a real application, you would save the product to the database here
  res.status(201).json({ message: 'Product created', product: newProduct });
});

// Put update product route
router.put('/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
   
    res.json({ message: `Product ${productId} updated`, product: updatedProduct });
});

// Delete product route
router.delete('/:id', (req, res) => {
  const productId = req.params.id;
    res.json({ message: `Product ${productId} deleted` });
});

// Pagination route
router.get('/page/:pageNumber', (req, res) => {
  const pageNumber = parseInt(req.params.pageNumber, 10);
  const pageSize = 10; // Number of products per page
  const products = [];
    for (let i = 1; i <= pageSize; i++) {
        const productId = (pageNumber - 1) * pageSize + i;
        products.push({ id: productId.toString().padStart(3, '0'), name: `Product ${productId}` });
    }
  res.json({ page: pageNumber, products });
});

module.exports = router;
