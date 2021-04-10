import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducers';
import axios from 'axios';

const initialState = {
    user: '',
    item: [],
    isAuthenticated: false,
    isLoading: true,
    token: localStorage.getItem('token')
}


export const ContextProvider = createContext(initialState);

export function GlobalState({children}){
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function login(user){
        axios.post('/api/user/auth',user)
        .then(res => dispatch({
            type: 'LOGIN_USER',
            payload: res.data
        }))
    }

    function loadUser(){
        // user loading
        dispatch({type: 'USER_LOADING'});
    
        //Get token from state
        const token = state.user.token;
    
        // headers
        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }
        // if token , add to headers config
        if(token){
            config.headers['Authorization'] = `Token ${token}`;
        }
    
        axios.get('/api/user/',config)
        .then(res=>{
            dispatch({
                type: 'USER_LOADED',
                payload: res.data
            });
        }).catch(err => console.log(err)) 
    }

    function tokenConfig(){
        const token = state.auth.token;

        const config = {
            headers :  {
                "Content-type": "application/json"
            }
        }

        if(token){
            config.headers['x-auth-token'] = token;
        }

        return config;
    }

    return(
        <ContextProvider.Provider value={{
            loadUser,
            login,
            isLoading: state.isLoading,
            isAuthenticated: state.isAuthenticated
        }}>
            {children}
        </ContextProvider.Provider>
    )
}

