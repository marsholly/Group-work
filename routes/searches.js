const express = require('express');
const router = express.Router();
const Search = require('../models/search.js');

// Get All
router.get('/', (req, res) => {
  Search.getAll()
    .then(searches => {
      res.send(searches);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});


// Get One
router.get('/:id', (req, res) => {
  Search.getOne(req.params.id)
    .then(search => {
      res.send(search);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// Create
router.post('/', (req, res) => {
  Search.create(req.body)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// Delete
router.delete('/:id', (req, res) => {
  Search.delete(req.params.id)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// Update
router.put('/:id', (req, res) => {
  Search.update(req.params.id, req.body)
    .then(() => {
      return Search.getOne(req.params.id);
    })
    .then(search => {
      res.send(search);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
