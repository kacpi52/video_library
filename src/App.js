import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import signIn from './pages/signIn';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  
export default App;
