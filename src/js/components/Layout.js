/**
 * Created by arun on 6/7/16.
 */
import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

export default class Layout extends React.Component{
    constructor() {
        super();
        this.state = {name : 'aruna'};
    }
    render() {
        setTimeout(() => {
            this.setState({name : 'Priyanka Chopra'});
        },5000)
        return (
            <div>
                <Header />
                <h1>it iz {this.state.name} </h1>
                <Footer />
            </div>
    );
    }
}