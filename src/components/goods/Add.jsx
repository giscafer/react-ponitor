/**
 * 商品链接输入框UI组件
 */
import React from 'react'
import './Add.css'
export default ({onAddClickHandler}) => {
    return (
        <div className="App-header">
            <div id="add-good">
                <h4>关注价格，在最适合的时候购买</h4>
                <input className="good-control-input" type="text" placeholder="输入商品URL" ref={(input) => { window.textInput = input; } } />
            <span className="input-group-btn"> <button className="btn btn-default" onClick={() => onAddClickHandler(window.textInput.value)}>添加</button></span>
            </div>
        </div>
    )
}