import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import meats from './assets/meat.jpg' 
import salats from './assets/salat.jpg' 
import tomatos from './assets/tomato.jpg' 
import top from './assets/top.jpg' 
import bottom from './assets/bottom.jpg' 

function App() { 
  const [meat, setMeat] = useState([{ 
    img: meats
  }])  
  const [salat, setSalat] = useState([ 
    { 
      img: salats
    }
  ]) 
  const [tomato, setTomato] = useState([ 
    {  
      img: tomatos 

    }
  ]) 
  const [money, setMoney] = useState(30)
   
  const addCheese = () => { 
    
    let some = [...salat, {img: salats}] 
    setSalat(some) 
    setMoney(money + 5)
  }
  const addMEat = () => { 
    
    let some = [...meat, {img: meats}] 
    setMeat(some) 
    setMoney(money + 15)
  }
  const addTomato = () => { 
    
    let some = [...tomato, {img: tomatos}] 
    setTomato(some)  
    setMoney(money + 10)
    
  } 
  const delCheese = ()=>{ 
    let del = [...salat] 
    del.pop() 
    setSalat(del) 
    setMoney(money - 5)
  } 
  const delTomato = ()=>{ 
    let del = [...tomato] 
    del.pop() 
    setTomato(del) 
    setMoney(money - 10)
  } 
  const delMEat = ()=>{ 
    let del = [...meat] 
    del.pop() 
    setMeat(del)
    setMoney(money - 15)
  }
  return (
    <div className="App"> 
    <h1> Сумма заказа: {money}</h1> 
        <div className='burger'>  
        <div className='top'> 
         <img src={top}></img>
         </div>
        <div className='salat'> 
        {salat.map((item) => (<img src={item.img} /> ))}
        </div> 
        <div className='meat'> 
        {meat.map((item) => (<img src={item.img} /> ))}
        </div> 
        <div className='tomato'> 
        {tomato.map((item) => (<img src={item.img}/>  ))}
        </div> 
        <div> 
          <img src={bottom}></img>
        </div>
        </div> 
        <div className='btn'> 
          <button onClick={addCheese}>Добавить Салат</button> 
          <button onClick={addMEat}>Добавить Мясо</button> 
          <button onClick={addTomato}>Добавить кетчуп</button>
        </div>  
        <div className='btn'> 
          <button onClick={delCheese}>Удалить Салат</button> 
          <button onClick={delMEat}>Удалить Мясо</button> 
          <button onClick={delTomato}>Удалить кетчуп</button>
        </div> 
       
    </div>
  );
}

export default App;
