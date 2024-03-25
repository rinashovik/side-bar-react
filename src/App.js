import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Sidebar, Navbar, Footer} from "./components/";
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Products from './pages/Products';
import Analytical from './pages/Analytical';
import Comments from './pages/Comments';
import Payment from './pages/Payment';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
// import {Sidebar,Navbar,Footer} from './components/';
import Settings from './pages/Settings';

function App() {
  return (
    
    <div>

     <Navbar />

             {/* <h1 className=' bg-red-800'>Hello World!!!!</h1> */}
      
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
  <Route path='/payment' element={<Payment />} />
  <Route path='/settings' element={<Settings />} />


</Routes>

</Sidebar>
</BrowserRouter>

      </div>


<div>  

 < Footer />
</div>

    </div>
  );
}

export default App;
