/* eslint-disable */
import React from 'react'

export default ({good={}}) => {
    return (
        <div className='good'>
            <div className='icon'>
                <img src={good.src} alt={good.name} className='good-img' />
                <div className='good-name' title={good.name}>
                    {good.name}<br />
                    <a href={good.url} target='_blank'>详情</a>
                    <a style={{cursor:'pointer'}} href='javascript:void(0)'>趋势</a>
                </div>
            </div>
        </div>
    )
}