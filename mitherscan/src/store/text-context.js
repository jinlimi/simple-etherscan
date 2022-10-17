import { useState, createContext } from 'react';

export const TextContext = createContext({
    text: ''
})

const Store = (props) => {
    const [text, setText] = useState(`아무거나 검색하세요.`)

    return (
        <TextContext.Provider value={text}>
            {props.children}
        </TextContext.Provider>
    )
}

export default Store;