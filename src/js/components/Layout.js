/**
 * Created by arun on 6/7/16.
 */
import React from 'react';
import { Link } from "react-router";

import Header from './Header.js';
import Footer from './Footer.js';


export default class Layout extends React.Component{
    constructor() {
        super();
        this.state = {name : 'aruna'};
    }
    nevigate() {
        this.props.history.pushState(null, '/');
    }
    render() {
        setTimeout(() => {
            this.setState({name : 'Priyanka Chopra'});
        },5000)
        return (
            <div>
                <Header />
                <button onClick={this.nevigate.bind(this)}>main</button>
                <Link to="abc">Page 2</Link>
                <Link to="def">Page 3</Link>
    {this.props.children}
                <h1>it iz {this.state.name} </h1>
                <Footer />
            </div>
    );
    }
}