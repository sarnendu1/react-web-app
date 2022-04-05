import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Item from './components/item';
import Home from './components/home';


function App() {
  
  return (

    <BrowserRouter>
   
      <Switch>
        <Route exact path= '/' component={Home} />
       
        <Route exact path= '/:id' component={Item} />
       
      </Switch>
    
  </BrowserRouter>

  );

}

export default App;
