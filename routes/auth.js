const express = require('express');
const router = express.Router();

const { signup, signin, postTransactions, getTransactions, postFavorites, getFavorites } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/transactions', postTransactions)
router.get('/transactions', getTransactions )
router.post('/favorites', postFavorites)
router.get('/favorites', getFavorites)

module.exports = router;