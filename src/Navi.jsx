import {HashRouter,BrowserRouter, Routes, Route} from "react-router-dom";


import Home from './App.jsx';
import Contact from "./Contact.jsx";
import Designandinstall from "./Designandinstall.jsx";
import "./fontDir.css";
import Maintnence from "./Maintnence.jsx";
import Mulching from "./Mulching.jsx";
import Pruning from "./Pruning.jsx";
import Gallery from "./Gallery.jsx";
import About from "./About.jsx";
import FAQ from "./FAQ.jsx";
import ContactUs from "./ContactUs.jsx";

/* Color guided
Text off-white: #f7f7f7
Main green: #0f725e
light green:#0eb191
dark brown: #ba9979
light brown: #dbc1af
Dark purple: #783aad
light purple: #b083d8
Text black: Default text color
*/



function Navi(){
     return(
          <>
               <HashRouter>{/*<BrowserRouter>*/}
                    <Routes>
                         <Route path='/Home' element={<Home/>}/>
                         <Route path='/Design' element={<Designandinstall/>}/>
                         <Route path='/Maintnence' element={<Maintnence/>}/>
                         <Route path='/Maintnence/Mulching' element={<Mulching/>}/>
                         <Route path='/Maintnence/Pruning' element={<Pruning/>}/>
                         <Route path='/Gallery' element={<Gallery/>}/>
                         <Route path='/About' element={<About/>}/>
                         <Route path='/FAQ' element={<FAQ/>}/>
                         <Route path='/ContactUs' element={<ContactUs/>}/>
                         <Route path='/' element={<Home/>}/>
                    </Routes>
               </HashRouter>{/*</BrowserRouter>*/}
               <div>kk</div>
               <Contact/>
          </>
     )
}

export default Navi;
