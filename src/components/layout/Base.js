import React from 'react';
import HeaderContent from './Header_Content.js';
import Sidebar from './Sidebar.js';

function Base() {
    return(
        <div class="General-Flex-Wrapper" style={generalStyle}>
            <link href="./style.css" rel="stylesheet" type="text/css"/>
            <Sidebar/>
            <HeaderContent/>
        </div>
    )
}

const generalStyle = {
  display: 'flex',
  minHeight: '70vh',
  backgroundColor: '#e5e4e2'
}
export default Base;