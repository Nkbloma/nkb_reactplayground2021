import React from 'react';

function Header_Content() {
    return (
            <div class="HeaderContent-Flex-Stack" style={HeaderContentFlexStyle}>
				<span class="box header" style={HeaderStyle}>
					<span class="currentPage-Title" style={currentPageTitle}>Dashboard 03/17/2021</span>
					<span style={{marginRight:"20px", flexGrow: "0.01"}}>
						<i class="far fa-bell" style={{paddingRight:"20px"}}></i>
						<img class="HeaderAvatar" src="Icons/ProfileAvatar.png" style={{width:"40px", height:"40px"}} alt='NoPics'/>
					</span>
				</span>
				<div class="Main-Content" style={MainContentStyle}>
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
				</div>
			</div>
    )
}
const HeaderContentFlexStyle = {
    flex: '2',
    display: 'flex',
    flexFlow: "column",
    marginLeft:'20px'
}
const HeaderStyle = {
    margin: '0px',
    minHeight: '10vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexGrow:'0.2' 
}
const currentPageTitle = {
    flex: '1',
    color: 'rgba(90, 90, 95, 0.5)',
    fontSize: 'large'
}
const MainContentStyle = {
    borderTopStyle: "solid",
    padding:"20px",
    margin: "0px",
    minHeight: "90vh"
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
export default Header_Content;
