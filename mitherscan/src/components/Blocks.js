import { useState } from 'react';
import axios from 'axios';
import Card from '../UI/Card';

import classes from './Blocks.module.css';

const Blocks = () => {

    const [inputData, setInputData] = useState('');
    const [blockInfo, setBlockInfo] = useState({});

    const handleInputData = (e) => {
        setInputData(e.target.value);
    }

    function getBalance(address) {
        axios({
            method : "GET",
            url : `http://localhost:8080/blocks/${address}`
        })
            .then((response)=>{
                // return response.json();
                console.log(response.data);
                setBlockInfo(response.data);
            })
        }

    function handleSearchButton() {
        getBalance(inputData);
    }

    return (
        <div>
                <h2 className={classes.header}>Block Details</h2>
                <div className={classes.together}>
                    <input type="text" onChange={handleInputData} className={classes.form}></input>
                    <button className={classes.button} onClick={handleSearchButton}>search</button>
                </div>
                <Card>
                {blockInfo ? 
                    <div>
                        <p> Block Height: {blockInfo.number} </p>
                        <p> Timestamp: {blockInfo.timestamp}</p>
                        <p> Total Difficulty: {blockInfo.totalDifficulty}</p>
                        {/* <p> Number of transactions: {blockInfo.transactions.length}</p> */}
                        <p> Gas Used: {blockInfo.gasUsed} </p>
                        <p> Gas Limit: {blockInfo.gasLimit}</p>
                    </div>
                :
                <div>
                    <h3>No information Yet</h3>
                    <p>Block Number를 검색해주세요.</p>
                </div>
                }
                </Card>
        </div>
    );
};

export default Blocks;