import { createSlice } from "@reduxjs/toolkit"; 
const initialState = { 
    carColor: '#101002', 
    chrome: '#e8e8e8', 
    wheel: '#101002', 
    plastic: '#101002', 
    currentSelect: 'Цвет корпуса',
} 
const carSlice = createSlice({ 
    name:'car',
    initialState, 
    reducers:{ 
        setCarColor(state,action){ 
            state.carColor = action.payload.color
        }, 
        setChromColor(state,action){ 
            state.chrome = action.payload.color
        }, 
        setWheelColor(state,action){ 
            state.wheel = action.payload.color
        }, 
        setPlasticColor(state,action){ 
            state.plastic = action.payload.color
        },  
        setCurrentSelect(state,action){ 
            state.currentSelect = action.payload.select
        }
        
    }
}) 
export const {setCarColor, setChromColor, setPlasticColor, setWheelColor, setCurrentSelect} = carSlice.actions 
export default carSlice.reducer