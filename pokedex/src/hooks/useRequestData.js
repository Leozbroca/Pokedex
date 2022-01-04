import { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../constants/baseURI'

export const useRequestData = (initialState) => {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("")

    const getData = () => {
        setIsLoading(true);
        axios.get(BASE_URL).then((res) =>{
            setIsLoading(false)
            setData(res.data)
        }).catch((err) => {
            alert(err.response.data)
            setIsLoading(false)
            setError(err)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return [data, isLoading, error]
}
