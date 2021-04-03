import NavBar from "./components/navbar/navbar.component";
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from "./components/home/home.componet";
import Footer from "./components/footer/footer.component";
import ItemList from "./components/itemList/ItemList.component";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/itemlist" component={ItemList}/>

        <Footer/>
      </Router>
    </div>
   
  );
}

export default App;
