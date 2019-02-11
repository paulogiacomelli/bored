import React, { Component } from 'react';
import './App.css';
import BoredGenerator from './components/BoredGenerator';
import Footer from './components/Footer';

class App extends Component {
    
    render() {
        return (
            <div>
                <BoredGenerator/>
                <Footer/>
            </div>
        )
    }
}

export default App;
