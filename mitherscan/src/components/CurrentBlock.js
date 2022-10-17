import axios from 'axios';
import {useState, useEffect} from 'react';
import Card from '../UI/Card';

const CurrentBlock = () => {

    const [data, setData] = useState([]);

    useEffect( function getBlockData() {
        axios({
            method : "GET",
            url : "http://localhost:8080/blocks/latest"
        })
            .then((obj)=>{
                // console.log([obj.data])
                if(!data.includes(obj)){
                    setData(obj.data);
                }
        })
        // setInterval(() => getBlockData(), 3000);
    }, []);
    
    return (
        <Card>
            <h2> Block Height:{data.number}</h2>
        </Card>
    )

}

export default CurrentBlock;