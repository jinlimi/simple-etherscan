import { useState, useContext } from 'react';
import axios from 'axios';
import { TextContext } from '../store/text-context';
import Card from '../UI/Card';

import classes from './Transactions.module.css';

const Transactions = () => {
    const { text } = useContext(TextContext);

    const [inputData, setInputData] = useState(`${text}`);
    const [transaction, setTransaction] = useState({});

    const handleInputData = (e) => {
        setInputData(e.target.value);
    }

    const handleSearchButton = () => {
        getBalance(inputData);
    }
    

    const getBalance = (txID) =>{
        axios({
            method : "GET",
            url : `http://localhost:8080/transactions/${txID}`
        })
            .then((response)=>{
                // return response.json();
                console.log(response);
                setTransaction(response.data);
            })
        };

    return (
        <div>
            <h2 className={classes.header}>Transaction Details</h2>
            <div className={classes.together}>
                <input className={classes.form} type="text" onChange={handleInputData}></input>
                <button className={classes.button} onClick={handleSearchButton}>search</button>
            </div>
            <Card>
                {transaction ?
                <div>
                    <p> Blockhash: {transaction.blockHash} </p>
                    <p> Block: {transaction.blockNumber}</p>
                    <p> From: {transaction.from} </p>
                    <p> To: {transaction.to}</p>
                    <p> Value: {transaction.value}</p>
                    <p> Gas Price: {transaction.gasPrice} Gwei </p>
                </div>
                :
                <div>
                    <h3>no information</h3>
                </div>
                }
            </Card>
        </div>
    );
};

export default Transactions;