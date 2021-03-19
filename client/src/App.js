import './App.css';


import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';


import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
