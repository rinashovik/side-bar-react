import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Sidebar, Navbar, Footer} from "./components/";
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Products from './pages/Products';
import Analytical from './pages/Analytical';
import Comments from './pages/Comments';
// import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    
    <div >
{/* 
      <header className="App-header">
                {/* < Navbar /> */}
      {/* </header>  */}

      {/* <Dashboard /> */}
             {/* <h1 className='underline text-3xl text-green-200 bg-gray-500'>Hello World!!!!</h1> */}
      
      <div>

     

<BrowserRouter>
<Sidebar >
<Routes>

  <Route path='/' element={<Dashboard />} />
  <Route path='/dashboard' element={<Dashboard />} />
  <Route path='/about' element={<About />} />
  <Route path='/analytical' element={<Analytical />} />
  <Route path='/products' element={<Products />} />
  <Route path='/comments' element={<Comments />} />


</Routes>

</Sidebar>
</BrowserRouter>

      </div>


<div>  

 {/* < Footer /> */}
</div>

    </div>
  );
}

export default App;
