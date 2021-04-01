import React from 'react';
import HeaderContent from '../layout/Header_Content.js';
import Sidebar from '../layout/Sidebar.js';

function ContentHTML(){
    return (
        <div class="TopLayerContent-Flex" style={TopLayerContentStyle}>
            <div style = {topCaloriesStyle} class="shadow rounded topCalories Today-Calories">
                <span>Today</span>
                <h4>250.10</h4>
            </div>
            <div style = {topCaloriesStyle} class="shadow rounded topCalories Week-Calories">
                <span>Week</span>
                <h4>250.10</h4>
            </div>
            <div style = {topCaloriesStyle} class="shadow rounded topCalories Month-Calories">
                <span>Month</span>
                <h4>250.10</h4>
            </div>
            <div style = {topCaloriesStyle} class="shadow rounded topCalories Year-Calories">
                <span>Year</span>
                <h4>250.10</h4>
            </div>
        </div>
    )
}
function Dashboard() {
    let today=new Date();
    let date=parseInt(today.getMonth()+1) + "-"+ today.getDate() +"-"+today.getFullYear();

    const title=`Dashboard ${date}`;
    return(
        <div class="General-Flex-Wrapper" style={generalStyle}>
            <Sidebar/>
            <HeaderContent MainContent={ContentHTML()} PageTitle={title}/>
        </div>
    )
}

const generalStyle = {
  display: 'flex',
  backgroundColor: '#e5e4e2'
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
export default Dashboard;