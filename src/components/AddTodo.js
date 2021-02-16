import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title); //This adds the title on submit.
        this.setState({title: ''});
    }
    //gets the name value instead of just title, 
    //this gives us reusability for different fields.
    onAddItemChange = (e) => this.setState({ 
        [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style= {{ flex: '10', padding: '5px'}} 
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onAddItemChange}/>
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

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
      
  }

export default AddTodo
//This creates the form for the todo, this will be useful when adding to the api.
