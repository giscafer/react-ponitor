/**
 * 商品分类过来
 */
import React from 'react'
import './CategoryFilter.css'

export default ({onFilterClick}) => {

    return (
        <div className="cate">
            <nav>
                <span onClick={()=>onFilterClick('all')}>所有</span>
                <span onClick={()=>onFilterClick('jd')} className="link-active">京东</span>
                <span onClick={()=>onFilterClick('alibaba')}>天猫|淘宝</span>
                <span onClick={()=>onFilterClick('apple')}>Apple App</span>
            </nav>
        </div>
    )
}