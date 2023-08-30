import { useEffect, useState, createContext } from "react"
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [apiData , setApiData] = useState(null);
    const [dataFetched , setDataFetched] = useState(false)

    useEffect(() => {

        axios.get('https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler')
        .then(res => res.data )
        .then(data => {
            setApiData(data)
        })

        

    }, [])

    return (
        <DataContext.Provider value={{apiData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;