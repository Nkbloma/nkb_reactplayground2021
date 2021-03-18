import React from 'react';

function Sidebar(){
    return(
       <div class="shadow-sm rounded box Sidebar-Flex-Stack">
			<img class="CompanySymbol" src="Icons/SiteIcon.png" alt="NotFound"/>
			<div class="UserProfile">
				<img class="Avatarpic" src="Icons/ProfileAvatar.png" alt="Not Found"></img>
				<span>N.K.B</span>
				<i style={{paddingLeft: "13px"}} class="fas fa-arrow-right"></i>
			</div>
			<nav class="NavigationList">
			<ul style={{padding: "10px"}}>
				<li style={{listStyleType: 'none', backgroundImage: 'url(Icons/landmark-solid.svg)'}}>
					Dashboard
					<i class="fas fa-arrow-right" style={{paddingLeft:"49px"}}></i>
				</li>
				<li style={{listStyleType: 'none', backgroundImage: "url(Icons/chart-bar-regular.svg)"}}>
					Stats
					<i class="fas fa-arrow-right" style={{paddingLeft:"90px"}}></i>
				</li>
				<li style={{listStyleType: "none", backgroundImage: "url(Icons/book-solid.svg)"}}>
					Food List
					<i class="fas fa-arrow-right" style={{paddingLeft:"62px"}}></i>
				</li>
				<li style={{listStyleType: "none", backgroudImage: "url(Icons/hamburger-solid.svg)"}}>
					Add Food
					<i class="fas fa-arrow-right" style={{paddingLeft:"58px"}}></i>
				</li>
				<li style={{listStyleType: "none", backgroundImage: "url(Icons/bell-solid.svg)"}}>
					Notifications
					<i class="fas fa-arrow-right" style={{paddingLeft:"33px"}}></i>
				</li>
				<li style={{listStyleType: "none", backgroundImage: "url(Icons/cog-solid.svg)"}}>
					Settings
					<i class="fas fa-arrow-right" style={{paddingLeft:"67px"}}></i>
				</li>
			</ul>
			</nav>
        </div>
    )
}

export default Sidebar;