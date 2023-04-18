import top from './assets/top.jpg' 
import bottom from './assets/bottom.jpg'  
export default function Hamburger (props){ 
    const addTomato = () => { 
        props.addTomatoAC()
    } 
    const addSalat = () =>{ 
        props.addSalat()
    } 
    const addMeatAC =()=> { 
        props.addMeatAC()
    } 
    const delMEat =()=>{ 
      props.deleteMeatAC()
    } 
    const delSalat = () => {  
      props.deleteSalatAC()
    } 
    const dellTomato = () => { 
      props.deleteTomatoAC()
    }
    return( 
        <div> 
{/* 
<h1> Сумма заказа: {money}</h1>  */}
        <div className='burger'>  
        <div className='top'>  
         <img src={top}></img>
         </div>
        <div className='salat'> 
        {props.salat.map((i) => (<img className='salat' src={i.img} /> ))}
        </div> 
        <div className='meat'> 
        {props.meat.map((item) => (<img src={item.img} /> ))}
        </div> 
        <div className='tomato'> 
        {props.tomato.map((item) => (<img src={item.img}/>  ))}
        </div> 
        <div> 
          <img src={bottom}></img>
        </div>
        </div> 
        <div className='btn'> 
          <button onClick={addSalat}>Добавить Салат</button> 
          <button onClick={addMeatAC}>Добавить Мясо</button> 
          <button onClick={addTomato}>Добавить кетчуп</button>
        </div>  
        <div className='btn'> 
          <button onClick={delSalat}>Удалить Салат</button> 
          <button onClick={delMEat}>Удалить Мясо</button> 
          <button onClick={dellTomato}>Удалить кетчуп</button>
        </div>
        </div>
    )
}