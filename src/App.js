import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import meats from './assets/meat.jpg' 
import salats from './assets/salat.jpg' 
import tomatos from './assets/tomato.jpg' 
import HamburgerCOntainer from './HamburgerCOntainer';
import axios from 'axios';

function App() {  
  const [isEmpty, setEmpty] =useState(false)
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
      if(salat.length !== 0){ 
        let del = [...salat] 
    del.pop() 
    setSalat(del) 
    setMoney(money - 5)
      }
  } 
  const delTomato = ()=>{  
    if(salat.length !== 0){ 
      let del = [...tomato] 
      del.pop() 
      setTomato(del) 
      setMoney(money - 10) 
    }
    } 
    const delMEat = ()=>{  
      if(salat.length !== 0){ 
        let del = [...meat] 
        del.pop() 
        setMeat(del)
        setMoney(money - 15)}
      } 
      
  
  return (
    <div className="App"> 
       <HamburgerCOntainer/>
    </div>
  );
}

export default App; 
//action=query&generator=search&gsrsearch=Lincoln&gsrlimit=20&prop=pageimages|extracts&exchars=130%exinto&explaintext&exlimit=max&format=json&origin=*
  // const [meat, setMeat] = useState([{ 
  //   img: meats
  // }])  
  // const [salat, setSalat] = useState([ 
    //   { 
  //     img: salats
  //   }
  // ]) 
  // const [tomato, setTomato] = useState([ 
    //   {  
      //     img: tomatos 

  //   }
  // ]) 
  // const [money, setMoney] = useState(30)
   
  // const addCheese = () => { 
    
    //   let some = [...salat, {img: salats}] 
  //   setSalat(some) 
  //   setMoney(money + 5)
  // }
  // const addMEat = () => { 
    
  //   let some = [...meat, {img: meats}] 
  //   setMeat(some) 
  //   setMoney(money + 15)
  // }
  // const addTomato = () => { 
    
    //   let some = [...tomato, {img: tomatos}] 
    //   setTomato(some)  
    //   setMoney(money + 10)
    
    // } 
    // const delCheese = ()=>{ 
      //   let del = [...salat] 
  //   del.pop() 
  //   setSalat(del) 
  //   setMoney(money - 5)
  // } 
  // const delTomato = ()=>{ 
    //   let del = [...tomato] 
    //   del.pop() 
    //   setTomato(del) 
    //   setMoney(money - 10)
    // } 
    // const delMEat = ()=>{ 
      //   let del = [...meat] 
      //   del.pop() 
      //   setMeat(del)
      //   setMoney(money - 15)
      // } 
      
  

  //   async function searchWikipedia(searchQuery) {
  //     const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&redirects&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=3&&srsearch=${searchQuery}
  //     `;
  //     const response = await fetch(endpoint);
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }
  //     const json = await response.json(); 
  //     console.log(json)
  //     return json;
  //   }
  // searchWikipedia('Бишкек')