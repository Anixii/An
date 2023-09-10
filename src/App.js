import { setCarColor, setChromColor, setPlasticColor, setWheelColor } from './store/car-slice'
import { Route, Routes } from 'react-router-dom';
import './App.css';   
import CarSelect from './components/CarSelect';
import CarCustomPage from './components/CarCustomPage';
import ColorPicker from './components/ColorPicker';
function App() {  

  return (
    <div className="App">    
    
      <Routes> 
        <Route path='/*' element={<CarCustomPage/>}> 
        <Route path='body' element={<ColorPicker onChange={setCarColor}/>}/>
        <Route path='chrom' element={<ColorPicker onChange={setChromColor}/>}/>
        <Route path='wheel' element={<ColorPicker onChange={setWheelColor}/>} />
        <Route path='plastic' element={<ColorPicker onChange={setPlasticColor}/>} />
        </Route>  

      </Routes>
    </div>
  );
}

export default App; 
