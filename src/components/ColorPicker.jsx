import React from 'react'
import {setCarColor} from '../store/car-slice'
import s from './ColorPicker.module.css'
const color = [ 
    {color: '#16191c'}, 
    {color: '#fd0000'}, 
    {color: '#fdff00'}, 
    {color: '#fdf7ff'}, 
    {color: '#101002'}, 
    {color: '#109d02'}, 

]
const ColorPicker = () => {
    const onHandleChangeColor = (e) =>{  
        console.log(e);
        setCarColor({color: e.target.value})
    }
    return (
    <> 
    <div className={s.picker}>
        <ul className={s.picker__container}> 
            {color.map((item,index) => <li onClick={(e) => onHandleChangeColor(e)} key={index} style={{backgroundColor: item.color}} className={s.picker__item}></li>)}
        </ul>
    </div>
    </>
  )
}

export default ColorPicker