import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducers';
const initialState = {
    user: '',
    item: []
}


export const ContextProvider = createContext(initialState);

export function GlobalState({children}){

    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <ContextProvider.Provider value={"hello world"}>
            {children}
        </ContextProvider.Provider>
    )
}

