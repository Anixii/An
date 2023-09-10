import React from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { setCurrentSelect } from '../store/car-slice';
import { useDispatch, useSelector } from 'react-redux';
const options = [
    { value: 'body', label: 'Цвет корпуса' },
    { value: 'chrom', label: 'Цвет хрома' },
    { value: 'wheel', label: 'Цвет суппортов' },
    // { value: 'plastic', label: 'Цвет пластика' }
  ]
const CarSelect = () => { 
    const {currentSelect} = useSelector(state => state.car)  
    const dispatch = useDispatch()
    const nav = useNavigate()
    const onChangeSelect = (e) =>{   
        dispatch(setCurrentSelect({select:e.label}))
        nav(`/${e.value}`)
    }
    return (
    <> 
    <div className='select_car'> 
    <Select onChange={(e) => onChangeSelect(e)} className='car_select' options={options} defaultValue={currentSelect}/>
    </div>
    </>
  )
}

export default CarSelect