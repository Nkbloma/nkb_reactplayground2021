import React, {Component} from 'react';

class Header_Content extends Component{
    props={
        PageTitle: "",
        MainContent: ""
    }
    render() {
        return (
                <div class="HeaderContent-Flex-Stack" style={HeaderContentFlexStyle}>
                    <span class="box header" style={HeaderStyle}>
                        <span class="currentPage-Title" style={currentPageTitle}>
                            {this.props.PageTitle}
                        </span>
                        <span style={{marginRight:"20px", flexGrow: "0.01"}}>
                            <i class="far fa-bell" style={{paddingRight:"20px"}}></i>
                            <img class="HeaderAvatar" src="Icons/ProfileAvatar.png" style={{width:"40px", height:"40px"}} alt='NoPics'/>
                        </span>
                    </span>
                    <div class="Main-Content" style={MainContentStyle}>
                        {this.props.MainContent}
                    </div>
                </div>
        )
    }
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

export default Header_Content;
