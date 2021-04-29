import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/pages/DashboardPage.js';
import FoodJournal from './components/pages/FoodJournalPage.js';
import AddFood from './components/pages/AddFoodPage.js';
import Statistics from './components/pages/StatsPage.js';
import Notifications from './components/pages/NotificationsPage.js';
import Settings from './components/pages/SettingsPage.js';
import {BrowserRouter, Route} from 'react-router-dom'
//import HelloForm from './components/functions/HelloForm';

class App extends Component{

  state = {
    ReturnedMessage: []
  };
  

  render(){
    return (
      <BrowserRouter>
        <Route exact path={["/", "/dashboard"]} component={Dashboard}/>
        <Route path='/stats' component={Statistics}/>
        <Route path='/foodjournal' component={FoodJournal}/>
        <Route path='/addfood' component={AddFood}/>
        <Route path='/notifications' component={Notifications}/>
        <Route path='/settings' component={Settings}/>
      </BrowserRouter>
    )
  }
}
export default App;
