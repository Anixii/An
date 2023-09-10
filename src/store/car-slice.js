import { createSlice } from "@reduxjs/toolkit"; 
const initialState = { 
    carColor: '#101002', 
    chrome: '#101002', 
    wheel: '#101002', 
    plastic: '#101002'
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
        
    }
}) 
export const {setCarColor, setChromColor, setPlasticColor, setWheelColor} = carSlice.actions 
export default carSlice.reducer