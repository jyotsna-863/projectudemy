
import './App.css';
import Navbar from './Udemy/Navbar';
import { Route, Routes } from 'react-router-dom';
import ULanding from './Udemy/ULanding';
import Excelpage from './Udemy/Pages/Excelpage';
import Pythonpage from './Udemy/Pages/Pythonpage';
import Webdevpage from './Udemy/Pages/Webdevpage';
import Comments from './Udemy/Pages/Comments';
import Javascrpage from './Udemy/Pages/Javascrpage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ULanding/>
      
      <Routes>
        <Route path="/" element={<ULanding/>}/>

        <Route path='/Excel' element={<Excelpage/>}></Route>
        <Route path='/Python' element={<Pythonpage/>}></Route>
        <Route path='/Web Development' element={<Webdevpage/>}></Route>
        <Route path='/javascript' element={<Javascrpage/>}></Route>
        <Route path='/Comments' element={<Comments/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
