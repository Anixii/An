import { createSlice } from "@reduxjs/toolkit"; 
const initialState = { 
    carColor: ''
} 
const carSlice = createSlice({ 
    name:'car',
    initialState, 
    reducers:{ 
        setCarColor(state,action){ 
            state.carColor = action.payload.color
        }
    }
}) 
const {setCarColor} = carSlice.actions 
export default carSlice.reducer