import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Photography from './components/pages/Photography';
import Blogs from './components/pages/Blogs';
import ContactUs from './components/pages/Contacts-Us';
import Cooking from './components/pages/Cooking';
import Footer from './components/Footer';




function App() {
  return (
    <>
      <Router>
        
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/photography' component={Photography} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/cooking' component={Cooking} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
