import React, { Component } from 'react'

import Content from './Content';

class Web extends Component {
    
    render(){
        return(
            <div className="app">
                <h1>Data Handel</h1>
                <Content title="web Stack" />
            </div>
        )
    }
}

export default Web;