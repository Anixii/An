import React from 'react'
import s from './ColorPicker.module.css'
import { useDispatch } from 'react-redux'
const color = [ 
    {color: '#16191c'}, 
    {color: '#fd0000'}, 
    {color: '#fdff00'}, 
    {color: '#fdf7ff'}, 
    {color: '#101002'}, 
    {color: '#109d02'}, 
]
const ColorPicker = ({onChange}) => {
    const dispatch = useDispatch()
    const onHandleChangeColor = (e) =>{  
        dispatch(onChange({color: e}))
    }
    return (
    <> 
    <div className={s.picker}>
        <ul className={s.picker__container}> 
            {color.map((item,index) => <li onClick={(e) => onHandleChangeColor(item.color)} key={index} style={{backgroundColor: item.color}} className={s.picker__item}></li>)}
        </ul>
    </div>
    </>
  )
}

export default ColorPicker