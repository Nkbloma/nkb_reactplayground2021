import React from 'react';

function Header() {
    return (
        <div class="HeaderContent-Flex-Stack">
				<span class="box header">
					<span class="currentPage-Title">Dashboard 03/17/2021</span>
					<span style={{marginRight:"20px", flexGrow: "0.01"}}>
						<i class="far fa-bell" style={{paddingRight: "20px"}}></i>
						<img class="HeaderAvatar" src="Icons/ProfileAvatar.png" style={{width:"40px", height:"40px"}} alt="not"/>
					</span>
				</span>
        </div>
    )
}
/*const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
*/
export default Header;
