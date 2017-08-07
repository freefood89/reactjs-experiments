import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <h1>Item { this.props.match.params.id }</h1>
        );
    }
}