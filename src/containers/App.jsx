import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import GoodContent from './GoodContent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <GoodContent/>
                <Footer />
            </div>
        )
    }
}

export default App;
