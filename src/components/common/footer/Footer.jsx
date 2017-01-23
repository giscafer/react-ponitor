import React from 'react'
import './Footer.css'
export default () => {
    return (
        <footer className="footer">
            <ul className="list-inline text-center">
                <li><a href="https://github.com/giscafer/" target="_blank">©giscafer</a></li>
                <li className="phone">Ponitor = [ P ] rice + M [ onitor ]&nbsp;价格监测</li>
                <li className="phone"><a href="https://github.com/giscafer/react-ponitor/issues" target="_blank">意见反馈</a></li>
                <li className="phone"><a href="https://github.com/giscafer/Ponitor/wiki/" target="_blank">使用教程</a></li>
                <li><a href="https://github.com/giscafer/Ponitor/" target="_blank">查看Vue.js版本</a></li>
            </ul>
        </footer>
    )
}