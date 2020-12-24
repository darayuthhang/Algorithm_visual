import React from 'react';
import './linkList.css';
import Node from './Node/Node';

/**
 * @description display LinkList and how it work
 * @param {data} receive data from as props 
 */

const LinkList = ({data}) => {
    return (
        <div className="LinkList-head">
            <Node data={data} />
            <Node data={data} />
            
        </div>
    )
}

export default LinkList;
