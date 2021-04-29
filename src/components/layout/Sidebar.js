import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar(){
	return(
       <div className="shadow-sm rounded box Sidebar-Flex-Stack" style={SidebarFlexStyle}>
			<img className="CompanySymbol" src="Icons/SiteIcon.png" alt="NotFound" style={CompanySymbolStyle}/>
			<div className="UserProfile" style={UserProfileStyle}>
				<img className="Avatarpic" src="Icons/ProfileAvatar.png" alt="Not Found" style={AvatarPicStyle}></img>
				<span style={UserProfileSpanStyle}>N.K.B</span>
				<i style={UserProfileIconStyle} className="fas fa-arrow-right"></i>
			</div>
			<nav className="NavigationList" style={NavigationListStyle}>
				<ul style={NavigationListUlStyle}>
						<Link to={{pathname: '/dashboard'}}> 
							<li key="dashboard" style={NavigationListLiStyle("url(Icons/landmark-solid.svg")}>
								<span style={NavigationListText}>Dashboard</span>
								<i style={NavigationListIcon} className="fas fa-arrow-right"></i>
							</li>
						</Link>
						<Link to={{pathname: '/stats'}}>
							<li key="stats" style={NavigationListLiStyle("url(Icons/chart-bar-regular.svg)")}>
								<span style={NavigationListText}>Stats</span>
								<i style={NavigationListIcon} className="fas fa-arrow-right"></i>
							</li>
						</Link>
						<Link to={{pathname: 'foodjournal'}}>
							<li key="foodjournal" style={NavigationListLiStyle("url(Icons/book-solid.svg)")}>
								<span style={NavigationListText}>Food Journal</span>
								<i style={NavigationListIcon} className="fas fa-arrow-right"></i>
							</li>
						</Link>
						<Link to={{pathname: '/addfood'}}>
							<li key="addfood" style={NavigationListLiStyle("url(Icons/hamburger-solid.svg)")}>
								<span style={NavigationListText}>Add Food</span>
								<i style={NavigationListIcon} className="fas fa-arrow-right"></i>
							</li>
						</Link>
						<Link to={{pathname: '/notifications'}}>
							<li key="notifications" style={NavigationListLiStyle("url(Icons/bell-solid.svg)")}>
								<span style={NavigationListText}>Notifications</span>
								<i style={NavigationListIcon} className="fas fa-arrow-right"></i>
							</li>
						</Link>
						<Link to={{pathname: '/settings'}}>
							<li key="settings" style={NavigationListLiStyle("url(Icons/cog-solid.svg)")}>
								<span style={NavigationListText}>Settings</span>
								<i style={NavigationListIcon} className="fas fa-arrow-right"></i>
							</li>
						</Link>
					</ul>
				</nav>
        </div>
    )
}
const SidebarFlexStyle = {
	flex: '1',
	display: 'flex',
	flexFlow: 'column',
	marginRight: '10px',
	minHeight: '100vh',
	maxWidth: '240px',
	color: 'rgba(232, 232, 232, 0.8)',
	background: '#293042',
	padding: '0',
	margin: '0',
}
const CompanySymbolStyle = {
    margin: '0px',
    flex: '1',
    flexGrow: '0.3',
    objectFit: 'contain',
    width: '220px',
    padding: '0px'
}
const AvatarPicStyle = {
    width: '40px',
    height: '40px',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
}
const UserProfileStyle = {
    flex: '10%',
    flexGrow: '0.1',
    padding: '5px 0px 0px 10px',
    margin: '0',
    marginTop: '15px',
    borderBottomStyle: 'solid',
    borderWidth: '2px',
    height: '10px'
}
const UserProfileSpanStyle = {
    paddingLeft: '10px',
    fontWeight: 'bold',
    fontSize: '30px',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '10px'
}
const UserProfileIconStyle = {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    marginLeft: '40px'
}
const NavigationListStyle = {
    margin: '0',
    paddingTop: '0px',
    flex: '3',
    flexGrow: '3',
    background: 'none',
    alignContent: 'center',
    justifySelf: 'left',
}
const NavigationListText = {
	flex: "1",
	width:"100px",
	color: 'rgba(232, 232, 232, 0.8)'
}
const NavigationListIcon ={
	flex: "0.1",
	paddingTop:"5px",
	color: 'rgba(232, 232, 232, 0.8)'
  }
function NavigationListLiStyle(bg_image) {
    return({
		paddingLeft: '5px',
    	padding: '10px 32px 10px 35px',
    	backgroundRepeat: 'no-repeat',
    	backgroundPosition: 'left center',
    	backgroundSize: '20px',
    	fontWeight: 'bold',
    	listStyleType: 'none',
		display: 'flex',
		backgroundImage: bg_image
		}
	)
}
const NavigationListUlStyle = {
    marginLeft: '5px'
}
export default Sidebar;