import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Characters from '../views/Characters';
import Planets from '../views/Planets';
import Vehicles from '../views/Vehicles';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import CardBio from '../views/CardBio'
import injectContext from './AppContext';


function App() {
  return (
      <Router>
        <Navbar />
        <Searchbar />
        <Switch>
          <Route path='/' exact component={Characters} />
          <Route path='/characters' exact component={Characters} />
          <Route path='/planets' exact component={Planets} />
          <Route path='/vehicles' exact component={Vehicles} />
          <Route path='/characters/:id' component={CardBio} />
          <Route path='/planets/:id' component={CardBio} />
          <Route path='/vehicles/:id' component={CardBio} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default injectContext(App);
