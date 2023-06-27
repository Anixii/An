import { configureStore } from "@reduxjs/toolkit"; 
import burgerSlice from "./burger-reducer";
export default configureStore({ 
    reducer: { 
        burger:burgerSlice
    }
})