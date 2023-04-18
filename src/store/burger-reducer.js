import { type } from '@testing-library/user-event/dist/type'
import meats from '../assets/meat.jpg' 
import salats from '../assets/salat.jpg' 
import tomatos from '../assets/tomato.jpg' 
 const defaultState ={ 
  
        salat:[{ 
            img: salats
        }],  
        meat: [{ 
            img: meats
        }], 
        tomato: [ { 
            img: tomatos
        }], 
        errorMessage: '',  
        money: 30
        
    
} 
 let burgerReducer = (state = defaultState, action) =>{ 

switch(action.type){  
    case 'ADD_TOMATO':{  
        
        return {...state, 
        tomato: [...state.tomato, {img: tomatos}], 
        
    }
    }   
    case 'ADD_MEAT':{ 
        return {...state, 
        meat: [...state.meat, {img: meats}]}
    }   
    case 'ADD_SALAT':{ 
        return {...state, 
        salat: [...state.salat, {img: salats}]}
    } 
    case 'DELL_SALAT':{  
    
        if(state.salat.length !==0){ 
            let dell = {...state, salat: [...state.salat]} 
            dell.salat.pop() 
            return dell 
        } 
        return state.errorMessage = 'You dont have any Salat'
    } 
    case 'DELL_TOMATO': { 
        if(state.tomato.length !==0){ 
            let dell = {...state, tomato: [...state.tomato]} 
            dell.tomato.pop() 
            return dell
        } 
        return state.errorMessage = 'You dont have any TOmato'
    }
    case 'DELL_MEAT':{ 
        if(state.meat.length !==0){ 
            let dell = {...state, meat: [...state.meat]} 
            dell.meat.pop() 
            return dell 

        } 
        return state.errorMessage = 'You dont have any Meat'
    } 
    
    default : { 
        return state
    }
}

}  
export const deleteTomatoAC = ()=>{ return{type: 'DELL_TOMATO'}} 
export const deleteMeatAC = ()=>{ return{type: 'DELL_MEAT'}} 
export const deleteSalatAC = ()=>{ return{type: 'DELL_SALAT'}}
export const addTomatoAC=()=>{ 
    return{ 
        type: 'ADD_TOMATO'
    }
} 
export const addMeatAC =()=> { 
    return{ 
        type: 'ADD_MEAT'
    }
}  
export const addSalat = () => { 
    return{ 
        type: 'ADD_SALAT'
    }
} 
export default burgerReducer