import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/services"  component={Services} /> 
        <Route path="/products"  component={Products} /> 
        <Route path="/sign-up"  component={Signup} /> 
      </Switch>
      </Router>
    </div>
  );
}

export default App;
