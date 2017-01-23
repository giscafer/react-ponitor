/**
 * 商品分类过来
 */
import React from 'react'
import './CategoryFilter.css'

export default ({onFilterClick, filterType}) => {
    console.log(filterType)
    return (
        <div className="cate">
            <nav className='nav-bar'>
                <span onClick={() => onFilterClick('all')} className={ filterType === 'all' ? 'selected' : '' }>所有</span>
                <span onClick={() => onFilterClick('jd')} className={ filterType === 'jd' ? 'selected' : '' }>京东</span>
                <span onClick={() => onFilterClick('alibaba')} className={ filterType === 'alibaba' ? 'selected' : '' }>天猫|淘宝</span>
                <span onClick={() => onFilterClick('apple')} className={ filterType === 'apple' ? 'selected' : '' }>Apple App</span>
            </nav>
        </div>
    )
}