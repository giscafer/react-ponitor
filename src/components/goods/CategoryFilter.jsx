/**
 * 商品分类过来
 */
import React from 'react'
import './CategoryFilter.css'

export default () => {

    return (
        <div className="cate">
            <nav>
                <a href="#!/?type=all">所有</a> 
                <a href="#!/jd?type=jd" className="link-active">京东</a>
                <a href="#!/alibaba?type=alibaba">天猫|淘宝</a>
                <a href="#!/apps?type=apple">Apple App</a>
            </nav>
        </div>
    )
}