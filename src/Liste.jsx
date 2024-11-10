import React from 'react';
import './index.css';
import './App.css';

export default function NamensListe(){
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const listItems = numbers.map((number) => <li>{number}</li>);
    
    const element = (
        <ul>
            {listItems}
        
        </ul>
    )
    return element;
    
}