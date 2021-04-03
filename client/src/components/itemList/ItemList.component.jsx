import React, {useContext} from 'react'
import { ContextProvider } from '../context/GlobalContext';

function ItemList() {
    const value = useContext(ContextProvider);
    console.log(value);
    return (
        <section>
            <h1>ItemList {value}</h1> 
        </section>
    )
}

export default ItemList
