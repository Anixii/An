
import { Route, Routes } from 'react-router-dom';
import './App.css';  
import { database } from './firebase-config'
import { getDatabase,set,ref, get, child } from "firebase/database";
import HamburgerCOntainer from './HamburgerCOntainer';
import PriceContainer from './PriceContainer'
import OrederContainer from './OrederContainer';
function App() {  
  function writeUserData(userId=1, name='anixii', email='lol@mail.ru') {
   
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
    });
  } 



// function read() {  
//   console.log('reading...');
//   const dbRef = ref(getDatabase());
// get(child(dbRef, `users/${1}`)).then((snapshot) => {
// if (snapshot.exists()) {
//   console.log(snapshot.val());
// } else {
//   console.log("No data available");
// }
// }).catch((error) => {
// console.error(error);
// });
// } 
// read()  
  return (
    <div className="App">  
    {/* <Routes> 
    <Route path='/' element={<HamburgerCOntainer/>} />
    <Route path='/success/*' element={<PriceContainer/>}/>
    <Route path='/order/' element={<OrederContainer/>}/>
    </Routes> */} 
    <button onClick={writeUserData}/>
    </div>
  );
}

export default App; 
