const { response } = require('express');
const express = require('express');
const app = express();

const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/b3480c261f094b209eda1f722f89d43d";
const web3 = new Web3(rpcURL);

const balanceController = async(req,res, next) => {
    console.log(req)
    try {
        const {id} = req.params;
        const balanceInfo = await web3.eth.getBalance(id);
        const etherBal = await web3.utils.fromWei(balanceInfo, "ether");
        console.log(etherBal)
        res.status(200).json(etherBal);

    } catch (e) {
        console.error(err);
        res.status(500).send("Error Occured");
    }
}

const transactionController = async(req, res, next) => {
    console.log(req);
    try{
        const {id} = req.params;       
        const txObj = await web3.eth.getTransaction(id);
        res.status(200).json(txObj);
        
    }catch(err){
        console.error(err);
        res.status(500).json("Error Occured");
    }
};

const blockController = async(req, res, next) => {
    try{
        const {id} = req.params;            
        const blockObj = await web3.eth.getBlock(id);
        res.status(200).json(blockObj);
        
    }catch(err){
        console.error(err);
        res.status(500).json("Error Occured");
    }
}

const currentBlock = async () => {
    try {
        const temp = await web3.eth.getBlock("latest")
        return temp;
    } catch (e) {
        console.error(err);
        res.status(500).json("Error Occured")
    } 
}

module.exports = {
    balanceController,
    transactionController,
    blockController,
    currentBlock
}