import React from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
const options = [
    { value: 'body', label: 'Цвет корпуса' },
    { value: 'chrom', label: 'Цвет хрома' },
    { value: 'wheel', label: 'Цвет дисков' },
    { value: 'plastic', label: 'Цвет пластика' }
  ]
const CarSelect = () => { 
    const nav = useNavigate()
    const onChangeSelect = (e) =>{ 
        console.log(e.value); 
        nav(`/${e.value}`)
    }
    return (
    <> 
    <div className='select_car'> 
    <Select onChange={(e) => onChangeSelect(e)} className='car_select' options={options} defaultValue={options[0]}/>
    </div>
    </>
  )
}

export default CarSelect