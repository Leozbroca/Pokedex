import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequestData = (initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=35`)
        .then((res) =>{
            setData(res.data.results)
            console.log(res.data.results)
        })
        .catch((err) => {
            alert(err)
        })
    }, [])

    return (data)
}

export default useRequestData
