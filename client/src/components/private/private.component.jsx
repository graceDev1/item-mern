import React, {useContext} from 'react'
import { Route, Redirect} from 'react-router-dom';
import { ContextProvider } from '../context/GlobalContext';


function Private({Component}) {
    const { isLoading, isAuthenticated } = useContext(ContextProvider)
    return (
        <Route
        render={
            (props)=>{
                if(isLoading){
                    return <h2>Loading ...</h2>
                }
                else if(!isAuthenticated){
                    return <Redirect to="/login"/>
                }
                else{
                    return <Component {...props}/>
                }
            }
        }
        />
    )
}

export default Private
