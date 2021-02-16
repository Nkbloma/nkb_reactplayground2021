import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'
import './App.css';
import axios from 'axios';
import HelloForm from './components/HelloForm';

class App extends Component{
  state = {
    ReturnedMessage: []
  };
  bloopData = "";
  componentDidMount(){
    axios.get('https://s3c1zl14xi.execute-api.us-east-2.amazonaws.com/test/helloworld?')
    .then(res => console.log(res.data))
  }
  //Toggles Completed

  addTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data]})
      );
  }
  render(){
    return (
      <div>
        <HelloForm/>
        <p>{this.state.ReturnedMessage}</p>
      </div>
    )
  }
}
export default App;
