import React, {Component} from 'react';
import HeaderContent from '../layout/Header_Content.js';
import Sidebar from '../layout/Sidebar.js';
//import HelloForm from '../functions/HelloForm'

let today= new Date()
let date= parseInt(today.getMonth()+1) + "-"+ today.getDate() +"-"+today.getFullYear()
let title= `Food Journal ${date}`
export class FoodJournal extends Component {
    state={

    }
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.nam);
        this.props.sendMessage(this.state.nam); //This adds the title on submit.
        this.setState({nam: ''});   //using add function from App.js given by prop.
    }
    onInputChange = (e) => this.setState({ 
        [e.target.name]: e.target.value }
    );
    ContentHTML = () =>{
        return(
            <div class="MainContent_Flex" style={MainContent_Flex}>
                <div class="TopLayerContent-Flex" style={TopLayerContentStyle}>
                    <div style = {topCaloriesStyle} class="shadow rounded topCalories Today-Calories">
                        <span>Calories</span>
                        <h4>250.10</h4>
                    </div>
                    <div style = {topCaloriesStyle} class="shadow rounded topCalories Week-Calories">
                        <span>Protein</span>
                        <h4>250.10</h4>
                    </div>
                    <div style = {topCaloriesStyle} class="shadow rounded topCalories Month-Calories">
                        <span>Carbs</span>
                        <h4>250.10</h4>
                    </div>
                    <div style = {topCaloriesStyle} class="shadow rounded topCalories Year-Calories">
                        <span>Fat</span>
                        <h4>250.10</h4>
                    </div>
                </div>
                <form onSubmit={this.onSubmit} style={FormStyling}>
                        <input
                            type="text" 
                            name="nam"
                            style= {{ flex: '1', padding: '5px', fontStyle: 'italic'}} 
                            placeholder="Food name..."
                            value={this.state.nam}
                            onChange={this.onInputChange}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn"
                            style={{flex: '0.1', marginLeft:'15px'}}
                        />
                </form>
                <div class="JournalArea" style={JournalArea_Style}>
                    <div class="TopJournalLabels" style={TopJournalLabels_Style}>
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
                    <div class="JournalEntriesArea" style={JournalEntriesArea_Style}>
                        <div style={FullEntry_Style}>
                            <span style={SingleEntry_Style}>Almonds</span>
                            <span style={SingleEntry_Style}>2231</span>
                            <span style={SingleEntry_Style}>233</span>
                            <span style={SingleEntry_Style}>57</span>
                            <span style={SingleEntry_Style}>13</span>
                        </div>
                        <div style={FullEntry_Style}>
                            <span style={SingleEntry_Style}>Almonds</span>
                            <span style={SingleEntry_Style}>2231</span>
                            <span style={SingleEntry_Style}>233</span>
                            <span style={SingleEntry_Style}>57</span>
                            <span style={SingleEntry_Style}>13</span>
                        </div>
                    </div>
                </div>
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