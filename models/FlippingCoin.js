 const BlockChain  =require('./BlockChain') ;
 const Block  =require('./Block') ;

const GlobalChain = new BlockChain();
class FlippingCoin {
    constructor () {
        this.chain = []
    }
    validateNewChain = (req, res, next) => {
        if(req.body){
            if(req.body.id &&
                 req.body.name &&
                 req.body.genesis &&
                 req.body.genesis.date &&
                 req.body.genesis.transaction){
                     next()
                  } else {
                     res
                     .status(400)
                     .send({
                         message: 'Request format is not correct!'
                     })
                 }
          } else {
            res
             .status(400)
              . send ({
                 message: 'Request format is not correct!'
            })
    }}
        createNewChain = (req, res) => {
            const chain = GlobalChain.create(
            req.body.id,
            req.body.name,
            req.body.genesis)
        
            res
        .status(200)
         .send({
            message: ' Chain created', data: GlobalChain
        })}
        appendNewChild = (req, res) => {
         const block   = new Block(
                this.chain.length,
                req.body.timestamp,
                req.body.transaction
                )
                console.log(block)
        GlobalChain.addNewBlock(block);
        res.status(200).send({message: 'block added!'})
    }
        getChain = (req, res) => {
        res.status(200).send({ chain: GlobalChain })
    
    }
}

module.exports = new FlippingCoin()