
import React, { Component } from 'react';
import './node.css';

/***
 * 
 * @description create new Node Each time
 * 
 */
const Node = ({data}) => {
    return(
        <div className = "node"> 
            <div className="data">1</div>
            <div className="arrow"></div>
        </div>
    )
}

export default Node;
