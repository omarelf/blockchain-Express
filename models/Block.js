const sha256 =require('crypto-js/sha256.js') 

 class Block {
    constructor(
        index,
        timestamp,
        transaction,
        precedingHash=''
    ){
        this.index = index;
        this.timestamp = timestamp;
        this.transaction = transaction;
        this.precedingHash = precedingHash;
        this.hash = this.computerHash();
    }
    computerHash(){
        return sha256(this.index+ this.precedingHash+ this.timestamp + JSON.stringify(this.transaction))
    }
}

module.exports =Block;