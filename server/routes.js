const express = require('express');
const router = express.Router();

const { 
    balanceController, transactionController, blockController
 } = require('./controller')

router.get('/', (req, res)=>{
    res.send("It works Successfully");
})

router.get('/balance/:id', balanceController);
router.get('/transactions/:id', transactionController);
router.get('/blocks/:id', blockController);

module.exports = router;