const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
Tag.findAll({
  attributes: ['id', 'product_name', 'price', 'stock']

})
.then(dbTagData => res.json(dbTagData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});
 // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
 
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;