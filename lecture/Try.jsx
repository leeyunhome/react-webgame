import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.value['name']}</b> - {this.props.value['face']} - {this.props.index}
                
            </li>
        )
    }
}

export default Try;