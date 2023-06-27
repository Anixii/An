import top from './assets/top.jpg' 
import bottom from './assets/bottom.jpg'  
import { NavLink } from 'react-router-dom' 
import { useSelector,useDispatch,useStore } from 'react-redux'
import { addTomato, addSalat, addMeat, deleteMeat, deleteSalat, deleteTomato } from './store/burger-reducer';
export default function Hamburger (){ 
    console.log(useStore().getState());  
    const props = useSelector(state => state.burger)  
    const dispatch = useDispatch()
    const addTomatoHandler = () => { 
        dispatch(addTomato()) 
    } 
    const addSalatHandler = () =>{ 
        dispatch(addSalat())
    } 
    const addMeatHandler =()=> { 
        dispatch(addMeat())
    } 
    const delMEat =()=>{ 
      dispatch(deleteMeat())
    } 
    const delSalatHandler = () => {  
      dispatch(deleteSalat())
    } 
    const dellTomatoHandler = () => { 
      dispatch(deleteTomato())
    } 
    return( 
            <div> 
<h1> Сумма заказа: {props.money}</h1>  
         <div className='burger'> 
        <h1>Price: ${props.money}</h1>   
        <h2>{props.errorMessage}</h2>
        <div className='top'>   
         <img src={top} alt='top'></img>
         </div>
        <div className='salat'> 
        {props.salat.map((i) => (<img className='salat' alt='salat' src={i.img} /> ))}
        </div> 
        <div className='meat'> 
        {props.meat.map((item) => (<img alt='meat' src={item.img} /> ))}
        </div> 
        <div className='tomato'> 
        {props.tomato.map((item) => (<img alt='tomato' src={item.img}/>  ))}
        </div> 
        <div>  
          <img src={bottom} alt='bottom '/>
        </div>
        </div> 
        <div className='btn'> 
          <button onClick={addSalatHandler}>Добавить Салат</button> 
          <button onClick={addMeatHandler}>Добавить Мясо</button> 
          <button onClick={addTomatoHandler}>Добавить кетчуп</button>
        </div>  
        <div className='btn'> 
          <button onClick={delSalatHandler}>Удалить Салат</button> 
          <button onClick={delMEat}>Удалить Мясо</button> 
          <button onClick={dellTomatoHandler}>Удалить кетчуп</button>
        </div> 
        <button > <NavLink to={'/success'}>Далее</NavLink></button>
        </div> 

    )
} 
 