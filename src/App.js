
import { Route, Routes } from 'react-router-dom';
import './App.css';  
import PriceContainer from './PriceContainer'
import OrederContainer from './OrederContainer';
import Hamburger from './Hamburger';
function App() {  

  return (
    <div className="App">   
    lol
    <Routes> 
    <Route path='/' element={<Hamburger/>} /> 
    {/* <Route path='/success/*' element={<PriceContainer/>}/>
    <Route path='/order/' element={<OrederContainer/>}/> */}
    </Routes> 
    </div>
  );
}

export default App; 
