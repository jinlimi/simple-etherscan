import { useState } from 'react';
import axios from 'axios';
import Card from '../UI/Card';

import classes from './Balance.module.css';

const Balance = () => {

    const [inputData, setInputData] = useState();
    const [balance, setBalance] = useState({});

    const handleInputData = (e) => {
        setInputData(e.target.value);
    }

    const handleSearchButton = () => {
        getBalance(inputData);
    }

    const getBalance = (address) =>{
        axios({
            method : "GET",
            url : `http://localhost:8080/balance/${address}`
        })
            .then((response)=>{
                // return response.json();
                console.log(response.data);
                setBalance(response);
            }).then((data)=>{
                console.log(data);
            })
        };

    return (
        <div>
            <h2 className={classes.header}>Account 잔액 조회</h2>
            <div className={classes.together}>
                <input
                    className={classes.form}
                    type="text"
                    onChange={handleInputData}
                ></input>
                <button className={classes.button} onClick={handleSearchButton}>search</button>
            </div>
            <Card>
            {balance.data
                ? <p>Balance: {balance.data}ETH</p>
                : <div><h3>no information</h3></div>}
            </Card>
        </div>
    );
};

export default Balance;