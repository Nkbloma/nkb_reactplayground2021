import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import HelloForm from './components/HelloForm';

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
    .then(res => 
      this.setState({ReturnedMessage: res.data})
    )
  }
  render(){
    console.log(this.state.ReturnedMessage);
    return (
      <div>
        <HelloForm sendMessage={this.sendMessage}/>
        <p>{this.state.ReturnedMessage['message']}</p>
      </div>
    )
  }
}
export default App;
