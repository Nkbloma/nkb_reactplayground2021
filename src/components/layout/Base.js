import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function Base() {
    return(
        <div class="General-Flex-Wrapper">
            <link href="./style.css" rel="stylesheet" type="text/css"/>
            <Sidebar/>
            <Header/>
        </div>
    )
}

export default Base;