import React  from 'react';
import NavBar from "./components/navbar/navbar.component";
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/home/home.componet";
import Footer from "./components/footer/footer.component";

import { GlobalState } from "./components/context/GlobalContext";
import Login from "./components/login/login.component";
import ItemList from './components/itemList/itemlist.component';
// import Private from "./components/private/private.component";


function App() {

  // const { loadUser} = useContext(ContextProvider);
  
  // useEffect(()=>{
  //   loadUser();
  // })

  return (
    <div>
      <GlobalState>
      <Router>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/itemlist" component={ItemList} />
        <Route exact path="/login" component={Login}/>
        <Footer/>
      </Router>
      </GlobalState>
    </div>
   
  );
}

export default App;
