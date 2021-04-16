import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import GameInterface from './components/GameInterface/GameInterface';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/play" component={GameInterface}/>
      </div>
    </Router>
  );
}

export default App;
