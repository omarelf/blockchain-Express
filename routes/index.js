const router=require('express').Router() ;
const  Controller  =require('../models/FlippingCoin') ;


router.post('/blockchain', Controller.validateNewChain, Controller.createNewChain);
router.get('/blockchain', Controller.getChain);

router.post('/blockchain/append', Controller.appendNewChild);

module.exports = router;