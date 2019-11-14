import React, { Component } from 'react'

export default class Error extends Component {

    render() {
        const myStyle={textAlign: 'center', color: 'whitesmoke', marginTop: '100px',fontSize: '5rem'};

        return (
            <div>
                <h1 style={myStyle}>404</h1>
            </div>
        )
    }
}
