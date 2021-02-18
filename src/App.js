import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import HelloForm from './components/HelloForm';
import Header from './components/layout/Header.js';

class App extends Component{

  state = {
    ReturnedMessage: []
  };
  componentDidMount(){
    axios.get('https://s3c1zl14xi.execute-api.us-east-2.amazonaws.com/postOnly/helloworld')
    .then(res => this.setState({ReturnedMessage: res.data}))
  }
  //post data to aws
  sendMessage = (sent_name) => {
    axios.post(`https://s3c1zl14xi.execute-api.us-east-2.amazonaws.com/postOnly/helloworld?`,{
      name: sent_name,
    })
    .then(res =>{
      this.setState({ReturnedMessage: res.data})
      console.log("Response:");
      console.log(res);
    })
  }
  render(){
    return (
      <div>
        <Header/>
        <HelloForm sendMessage={this.sendMessage}/>
        <p>{this.state.ReturnedMessage['message']}</p>
      </div>
    )
  }
}
export default App;
