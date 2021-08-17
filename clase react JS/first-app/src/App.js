import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/navbar/Navigation';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Contacto from './components/contacto/Contacto';
import Curriculum from './components/cv/Curriculum.js';


function App() {
  return (
    <BrowserRouter>
     <Navigation/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/contacto'>
          <Contacto/>
        </Route>

        <Route exact path='/curriculum'>
          <Curriculum/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
     
  );
}

export default App;
