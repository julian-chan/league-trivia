import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import GameInterface from './components/GameInterface/GameInterface';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/play" component={GameInterface}/>
        <Route exact path="/about" component={About}/>
      </div>
    </Router>
  );
}

export default App;
