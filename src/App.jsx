import logo from './logo.svg';
import './App.css';
import Navbar from'./component/Navbar';
import First from'./pages/First';
import Home from './pages/Home';
import Viewrecipe from './pages/Viewrecipe';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Viewfullrecipe from './pages/Viewfullrecipe';
import PNF from './pages/PNF';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <div className='mb-[60px]'>
   <Navbar/>
   </div>
    <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/view'element={<Viewrecipe/>}/>
    <Route path='/fullrecipe'element={<Viewfullrecipe/>}/>
    <Route path='/*'element={<PNF/>}/>


</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
