import styled from "styled-components";

import num13 from "./assets/20013.webp";

import Pagepichead from "./Pagepichead.jsx";
import MainHeader from "./MainHeader.jsx";
import {PurpButt,IntroPara} from "./GlobalComponents.jsx";

//Don't bother to replace with ParaButton. All you'll do is create extra work for yourself.
const Divvy=styled.div`
     display: flex;
     background-color: #f7f7f7;
     justify-content: space-evenly;
     @media(max-width:950px){
          flex-direction:column;
     }
     div#para{
          @media(max-width:950px){
               padding-left:16px;
               padding-right:16px;
               align-self:center;
          }
          flex-shrink:2;
          max-width: 700px;
          p{
               font-family: Gentium-Plus;
               font-size:20px;
          }
     }
     div#buttons{
          max-width: 200px;
          display: flex;
          flex-direction: column;
          @media(max-width:950px){
               flex-direction:row;
               max-width:100%;
               align-items:stretch;
               justify-content:space-evenly;
               margin-bottom: 10px;
          }
          @media(max-width:351px){
               flex-direction: column;
          }
          div{
               padding:10px;
               background-image: linear-gradient(#0eb191, #0f725e,#0eb191);
               border-radius: 10%;
               @media(max-width:950px){
                    max-width: 150px;
               }
               @media(max-width:351px){
                    max-width:100%;
                    margin:5px;
               }

          }
          p{
               font-family: Gentium-Plus;
               font-size: 20px;
               color: #f7f7f7;
          }
          p:first-of-type{
               font-family: Times New Roman;
               font-size:22px;
               color: black;
          }
          div+div{
               margin-top:10%;
               @media(max-width:950px){
                    display: block flex;
                    flex-direction:column;
                    margin-top:0px;
                    justify-content:space-between;
               }
          }
     }
`;



function Maintnence(){
     return(
          <>
          <MainHeader/>
          <Pagepichead backing={num13} repeating={true}>
               Maintnence
          </Pagepichead>
          <IntroPara>
                    Whether you want a spring clean-up to get your garden ready for warm weather or a fall one to prepare for winter, we have you covered!
          </IntroPara>
          <Divvy>
               <div id="para">
                    <p class="display2">
                    Spring and fall clean-ups refer to preparing your yard for the upcoming season. You can elect to do one or the other of these clean-ups but many people do both. Take a moment to read about both and then decide which is best for you.
                    </p>
                    <p class="display2">
                    Fall clean-ups involve removing the leaves from the garden beds, window wells and hard surfaces (walks, drives, patios, etc.). Beds are prepared for winter by removing annual flowers, cutting back perennials and performing any necessary pruning. Some people choose to leave certain perennials (grasses, sedums) standing for winter interest. These plants can be cut back the following spring. All debris is removed from your yard to a composting site. This is also a good time to decorate planters with evergreens for the winter months.
                    </p>
                    <p >
                    Spring clean-ups are usually more involved than the one in fall. Any remaining annuals are removed and perennials are cut back to allow for new growth. Winter damage to shrubs and trees from cold, ice & snow, damage from animals or snow plows are rectified. Natural bed edges are re-cut and plastic ones fixed, if needed. Mulch is top dressed with a fresh layer. Hard surfaces are blown clean and all debris is removed to a composting site. This is also a good time to discuss any bulb or annual plantings as well as regular garden maintenance or bed renovations.
                    </p>
               </div>
               <div id="buttons">
                    <div>
                         <p><b>Mulch</b></p>
                         <p class="display2">Learn more about the benefits of adding mulch to your garden.</p>
                         <a href="/Maintnence/Mulching"><PurpButt Title="Open 'Mulching'">Learn More >>></PurpButt></a>
                    </div>
                    <div>
                         <p><b>Pruning</b></p>
                         <p class="display2">Learn more about pruning.</p>
                         <a href="/Maintnence/Pruning"><PurpButt title="Open 'Pruning & Trimming'">Learn More >>></PurpButt></a>
                    </div>
               </div>
          </Divvy>
          </>
     );
}

export default Maintnence;
