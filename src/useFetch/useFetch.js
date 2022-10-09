import { useState, useEffect } from 'react'
export default function useFetch(url, condition) {
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    url
                );
                const data = await response.json();
                setdata(data)
                setError(false)
                setIsLoading(false)
            } catch (error) {
                setError(true)
                return error
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, condition)

    return { data, isLoading, error };
}