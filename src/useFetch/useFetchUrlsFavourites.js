import { useEffect, useState } from "react";
const useFetchUrlsFavourites = (urls) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Promise.all(
                    urls.map(url => fetch(url).then(res => res.json()))
                )
                setData(response)
                setError(false)
                setIsLoading(false)
            } catch (error) {
                setError(true)
                return error;
            }
        }
        fetchData()
    }, [urls])

    return { data, isLoading, error };
};
export default useFetchUrlsFavourites;