import React from 'react'
import  './Header.css'
export default ()=>{
    return (
        <header className="navbar navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav"> <li><a href="../" id="logo" title="价格监测">Ponitor</a></li> </ul>
                </div>
                <div id="bs-navbar" className="collapse navbar-collapse"></div>
            </div>
        </header>
    )
}