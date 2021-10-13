import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import signIn from './pages/signIn';

function App() {
  return (
    <Router>
     
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/signIn' component={signIn} />
      </Switch>
    </Router>
   
  );
}
 // ///navbary i sidebary mysle czy dac osobno i pod spodem routy do zawartosci home i signin 
export default App;
