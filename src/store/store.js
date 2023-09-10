import { configureStore } from "@reduxjs/toolkit"; 
import carSlice from "./car-slice";
const store = configureStore({ 
    reducer:{  
        car: carSlice
    }
})  
window.store = store
export default store 