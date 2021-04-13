import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducers';
import axios from 'axios';

const initialState = {
    items: []
}


export const ContextProvider = createContext(initialState);

export function GlobalState({children}){
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function getItem(){
        axios.get('/api/item')
        .then(res => dispatch({
            type: 'GET_ITEM',
            payload: res.data
        }))
    }

    function deleteItem(id){
        axios.delete(`/api/item/${id}`)
        .then(res => {
            dispatch({
                type: 'DELETE_ITEM',
                payload: id
            })
        })
    }

    return(
        <ContextProvider.Provider value={{
            items: state.items,
            getItem,
            deleteItem
        }}>
            {children}
        </ContextProvider.Provider>
    )
}

