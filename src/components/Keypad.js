// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
    
    handleInput = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <input onKeyUp={this.handleInput} type = 'password'/>
        )
    }
}