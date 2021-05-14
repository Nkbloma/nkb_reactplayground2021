import React, { Component } from 'react';
import HeaderContent from '../layout/Header_Content.js';
import Sidebar from '../layout/Sidebar.js';

let today=new Date();
let date=parseInt(today.getMonth()+1) + "-"+ today.getDate() +"-"+today.getFullYear();
const title=`AddFood ${date}`;

export class AddFood extends Component{

    state = {
        typedVaue: ''
    }
    ContentHTML = () => {
        return (
            <div>
                <h1>AddFoodForm</h1>
                <form style={FormStyling}>
                            <label for="typedFoodName" style={{margin: '10px', marginTop: '15px', fontSize:'20px'}}>
                                FoodName
                            </label>
                            <input
                                type="text" 
                                name="typedFood"
                                style= {{ flex: '1', padding: '5px', margin:'10px', fontStyle: 'italic'}} 
                                placeholder="Food name..."
                                value={this.state.typedValue}
                                onChange={this.onInputChange}
                            />
                            <label for="typedCalories" style={{margin: '10px', marginTop: '15px', fontSize:'20px'}}>
                                Calories
                            </label>
                            <input
                                type="text" 
                                name="typedCalories"
                                style= {{ flex: '1', padding: '5px', margin:'10px', fontStyle: 'italic'}} 
                                placeholder="Calories..."
                                value={this.state.typedValue}
                                onChange={this.onInputChange}
                            />
                            <label for="typedProtein" style={{margin: '10px', marginTop: '15px', fontSize:'20px'}}>
                                Protein
                            </label>
                            <input
                                type="text" 
                                name="typedProtein"
                                style= {{ flex: '1', padding: '5px', margin:'10px', fontStyle: 'italic'}} 
                                placeholder="Protein..."
                                value={this.state.typedValue}
                                onChange={this.onInputChange}
                            />
                            <label for="typedCarbs" style={{margin: '10px', marginTop: '15px', fontSize:'20px'}}>
                                Carbs
                            </label>
                            <input
                                type="text" 
                                name="typedCarbs"
                                style= {{ flex: '1', padding: '5px', margin:'10px', fontStyle: 'italic'}} 
                                placeholder="Carbs..."
                                value={this.state.typedValue}
                                onChange={this.onInputChange}
                            />
                            <label for="typedProtein" style={{margin: '10px', marginTop: '15px', fontSize:'20px'}}>
                                Fat
                            </label>
                            <input
                                type="text" 
                                name="typedFat"
                                style= {{ flex: '1', padding: '5px', margin:'10px', fontStyle: 'italic'}} 
                                placeholder="Fat..."
                                value={this.state.typedValue}
                                onChange={this.onInputChange}
                            />
                            <input
                                type="submit"
                                value="Submit"
                                className="btn"
                                style={{flex: '0.5', width: '200px', margin:'10px', backgroundColor:'gray'}}
                            />
                    </form>
            </div>
        )
    }

    render(){
        return(
            <div class="General-Flex-Wrapper" style={generalStyle}>
                <Sidebar/>
                <HeaderContent MainContent={this.ContentHTML()} PageTitle={title}/>
            </div>
        )
    }
}

const generalStyle = {
  display: 'flex',
  backgroundColor: '#e5e4e2'
}
const FormStyling = {
    display: 'flex',
    flexFlow: 'column',
    paddingTop: '15px'
}
const TopLayerContentStyle = {
    padding:"15px",
    display: "flex",
    flexFlow: "row" 
}
const topCaloriesStyle = {
    padding: '15px',
    marginLeft: '30px',
    marginRight: '60px',
    backgroundColor: '#f1f9fd',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.8)'
  }
export default AddFood;