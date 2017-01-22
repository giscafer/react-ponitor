import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import Add from '../components/goods/Add';
import GoodContent from './GoodContent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" />*/}
                    <Add />
                </div>
                <GoodContent/>
                <Footer />
            </div>
        )
    }
}

export default App;
