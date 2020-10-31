import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            
          <Navbar/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
