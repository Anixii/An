
import { Route, Routes } from 'react-router-dom';
import './App.css';  
import { database } from './firebase-config'
import { getDatabase,set,ref, get, child } from "firebase/database";
import HamburgerCOntainer from './HamburgerCOntainer';
import PriceContainer from './PriceContainer'
import OrederContainer from './OrederContainer';
function App() {  

  return (
    <div className="App">  
    <Routes> 
    <Route path='/' element={<HamburgerCOntainer/>} />
    <Route path='/success/*' element={<PriceContainer/>}/>
    <Route path='/order/' element={<OrederContainer/>}/>
    </Routes> 
    </div>
  );
}

export default App; 
