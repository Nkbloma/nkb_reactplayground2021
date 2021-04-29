import React, {Component} from 'react';
import HeaderContent from '../layout/Header_Content.js';
import Sidebar from '../layout/Sidebar.js';
import axios from 'axios';
//import HelloForm from '../functions/HelloForm'

let today= new Date()
let date= parseInt(today.getMonth()+1) + "-"+ today.getDate() +"-"+today.getFullYear()
let title= `Food Journal ${date}`
export class FoodJournal extends Component {

    state={
        journalDate: date,
        journalEntries: [
        ],
        typedValue: '',
        ReturnedFoodEntry: [],
        Calories: 0,
        Protein: 0,
        Carbs: 0,
        Fat: 0,
        flashMessage: false
    }
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.typedValue);
        this.sendFoodQuery(this.state.typedValue);
        this.setState({typedValue: ''});   //using add function from App.js given by prop.
    }
    sendFoodQuery = (sent_foodName) => {
        axios.post(`https://v5ygmhb89a.execute-api.us-east-2.amazonaws.com/Test`,{
        foodName: sent_foodName,
        foodQuery: `${sent_foodName}.Name`
    })
    .then(res =>{
      let bod = res.data["body"]["mongoData"];
      if(bod === "null"){
          this.setState({flashMessage: true})
      }
      else{
        let newArray = [[bod["Name"], bod["Calories"], bod["Protein"], bod["Carbs"], bod["Fat"]]]
        this.setState({
            journalEntries:
                [...this.state.journalEntries,
                ...newArray 
                ] 
            })
        this.setState({
            Calories: Math.round(this.state.Calories += bod["Calories"]),
            Protein: Math.round(this.state.Protein +=bod["Protein"]),
            Carbs: Math.round(this.state.Carbs +=bod["Carbs"]),
            Fat: Math.round(this.state.Fat +=bod["Fat"]),
            flashMessage: false
        })
        }
    })
  }
    onInputChange = (e) => this.setState({ 
        [e.target.name]: e.target.value }
    );
    ContentHTML = () =>{
        return(
            <div className="MainContent_Flex" style={MainContent_Flex}>
                <div className="TopLayerContent-Flex" style={TopLayerContentStyle}>
                    <div style = {topCaloriesStyle} className="shadow rounded topCalories Today-Calories">
                        <span>Calories</span>
                        <h4>{this.state.Calories}</h4>
                    </div>
                    <div style = {topCaloriesStyle} className="shadow rounded topCalories Week-Calories">
                        <span>Protein</span>
                        <h4>{this.state.Protein}</h4>
                    </div>
                    <div style = {topCaloriesStyle} className="shadow rounded topCalories Month-Calories">
                        <span>Carbs</span>
                        <h4>{this.state.Carbs}</h4>
                    </div>
                    <div style = {topCaloriesStyle} className="shadow rounded topCalories Year-Calories">
                        <span>Fat</span>
                        <h4>{this.state.Fat}</h4>
                    </div>
                </div>
                <form onSubmit={this.onSubmit} style={FormStyling}>
                        <input
                            type="text" 
                            name="typedValue"
                            style= {{ flex: '1', padding: '5px', fontStyle: 'italic'}} 
                            placeholder="Food name..."
                            value={this.state.typedValue}
                            onChange={this.onInputChange}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn"
                            style={{flex: '0.1', marginLeft:'15px', backgroundColor:'gray'}}
                        />
                </form>
                {this.state.flashMessage &&
                    <p style={{color: 'red', fontSize:'20px', fontWeight: 'bold', fontFamily:'Roboto',}}>
                            Food item doesn't exist
                    </p>
                }
                <div className="JournalArea" style={JournalArea_Style}>
                    <div className="TopJournalLabels" style={TopJournalLabels_Style}>
                        <span style={JournalLabel_Style}>
                            Food Name
                        </span>
                        <span style={JournalLabel_Style}>
                            Calories
                        </span>
                        <span style={JournalLabel_Style}>
                            Protein
                        </span>
                        <span style={JournalLabel_Style}>
                            Carbs
                        </span>
                        <span style={JournalLabel_Style}>
                            Fat
                        </span>
                    </div>
                    <div className="JournalEntriesArea" style={JournalEntriesArea_Style}>
                        {this.state.journalEntries.map((fullEntry) =>(
                            <div style={FullEntry_Style}>
                                <span style={SingleEntry_Style} key="EntryName">{fullEntry[0]}</span>
                                <span style={SingleEntry_Style} key="EntryCalories">{fullEntry[1]}</span>
                                <span style={SingleEntry_Style} key="EntryProtein">{fullEntry[2]}</span>
                                <span style={SingleEntry_Style} key="EntryCarbs">{fullEntry[3]}</span>
                                <span style={SingleEntry_Style} key="EntryFat">{fullEntry[4]}</span>
                            </div>  
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
    
    render(){
        return(
            <div className="General-Flex-Wrapper" style={generalStyle}>
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
const MainContent_Flex = {
    padding:"15px",
    display: 'flex',
    flexFlow: 'column'
}
const FormStyling = {
    display: 'flex',
    paddingTop: '15px'
}
const JournalArea_Style = {
    marginTop:'25px',
    fontFamily:'Roboto',
}
const TopLayerContentStyle = {
    padding:"15px",
    display: "flex",
    flexFlow: "row" 
}
const TopJournalLabels_Style = {
    padding:'15px',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-evenly',
}

const JournalLabel_Style = {
    fontSize: '20px',
    flexGrow:'1.75',
    flexShrink: '0',
    flexBasis: '0',
    fontWeight: 'bold',
    fontFamily:'Roboto',

}

const JournalEntriesArea_Style = {
    padding:'15px',
    
}

const FullEntry_Style = {
    fontSize: '20px',
    display: 'flex',
    flexWrap: 'column',
    fontWeight: 'bold',
    fontFamily:'Roboto',
    borderBottom: '3px solid #66808080',
    justifyContent: 'space-evenly',
    paddingTop: '30px'
}

const SingleEntry_Style = {
    flexGrow: '1.75',
    flexShrink: '0',
    flexBasis: '0',
    fontFamily:'Roboto',
}

const topCaloriesStyle = {
    padding: '15px',
    marginLeft: '45px',
    marginRight: '60px',
    backgroundColor: '#f1f9fd',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.8)'
}
export default FoodJournal;