import NavBar from "./components/navbar/navbar.component";
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from "./components/home/home.componet";
import Footer from "./components/footer/footer.component";
import ItemList from "./components/itemList/ItemList.component";
import { GlobalState } from "./components/context/GlobalContext";

function App() {
  return (
    <div>
      <GlobalState>
      <Router>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/itemlist" component={ItemList}/>

        <Footer/>
      </Router>
      </GlobalState>
    </div>
   
  );
}

export default App;
