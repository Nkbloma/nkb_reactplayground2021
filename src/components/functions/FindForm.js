import React,{Component} from 'react';
import PropTypes from 'prop-types';

export class HelloForm extends Component{
    state = {
        foodName: ''
    }
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.foodName);
        this.props.sendMessage(this.state.foodName); //This adds the title on submit.
        this.setState({foodName: ''});   //using add function from App.js given by prop.
    }
    onInputChange = (e) => this.setState({ 
        [e.target.name]: e.target.value });
    render(){
        return(
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input
                type="text" 
                name="nam"
                style= {{ flex: '10', padding: '5px'}} 
                placeholder="Your name here..."
                value={this.state.foodName}
                onChange={this.onInputChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

HelloForm.propTypes={
    sendMessage: PropTypes.func.isRequired
}
export default HelloForm