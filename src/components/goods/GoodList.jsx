import React from 'react'
import Good from './Good'
export default ({goods=[]})=>{
    return (
        <div className='good-column'>
            {
                goods.map((good,index)=>{
                    <Good key={index}  good={good}/>
                })
            }
        </div>
    )
}