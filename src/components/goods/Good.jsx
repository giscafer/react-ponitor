/* eslint-disable */
import React from 'react'

export default ({goodInfo = {}}) => {
    return (
        <div className='good'>
            <div className='icon'>
                <img src={goodInfo.image} alt={goodInfo.name} className='good-img' />
                <div className='good-name' title={goodInfo.name}>
                    {goodInfo.name}<br />
                    <p className='good-price'>{goodInfo.priceText}</p>
                    <a className='detail' href={goodInfo.url} target='_blank'>详情</a>
                    { /*<a style={{cursor:'pointer'}} href='javascript:void(0)'>趋势</a>*/}
                </div>
            </div>
        </div>
    )
}