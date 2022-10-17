import { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './SearchAll.module.css';

export const TextContext = createContext({
    text: ''
})

const SearchAll = () => {

    const navigate = useNavigate();

    const [text, setText] = useState(`txID, account, blockNum을 검색해주세요.`)

    const ClickHandler = (event) => {
        if (text === `txID, account, blockNum을 검색해주세요.`) {
        setText(``);
    }};

    const BlurHandler = (event) => {
        if (text.length === 0) {
            setText(`txID, account, blockNum을 검색해주세요.`)
        }
    }

    const TypeHandler = (event) => {
        setText(event.target.value);
    };

    const SubmitHandler = (event) => {
        if (text.length === 7) {
            navigate('./blocks')
        }
        else if (text.length === 42) {
            navigate('./balance')
        } else if (text.length === 66) {
            navigate('./transactions')
        } else {
            alert("올바른 형식으로 입력했는지 확인해주세요.")
        }
    };

    return (
        <TextContext.Provider value={text}>
            <h1 className={classes.header}>Simple Etherscan</h1>
            <div className={classes.together}>
            <input type="text"
                    className={classes.form}
                    onFocus={ClickHandler}
                    onChange={TypeHandler}
                    onBlur={BlurHandler}
                    value={text}
            ></input>
            <button className={classes.button} onClick={SubmitHandler}>search</button>
            </div>
        </TextContext.Provider>
    )
};

export default SearchAll