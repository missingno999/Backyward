import styled from "styled-components";
import {useState} from "react";

const Df=styled.span`
     font-family:Kalocsai_Flowers;
     font-size:${(props)=>(props.fs)};
`;

const Ul=styled.ul`
     transition-property: transform;
     transition-duration: 1s;
     transform: translate(${(props)=>((props.State || props.h==1) ? "-360px":"0px")},0px);
     top:97px;
     display: flex;
     flex-direction: column;
     height: calc(100vh - 95px);
     max-width:320px;
     position:fixed;
     font-size:20px;
     list-style:none;
     text-indent: -1em;
     z-index:10;
     overflow-y: overlay;
     position-anchor: --mainHeader;
     padding-left:0px;
     margin:0px;
     border-style: ridge;
     a{
          transition-property: height,display,overflow;
          transition-duration:250ms,250ms,250ms;
          transition-behavior: allow-discrete;
          padding-left:40px;
          padding-right:20px;
          border-style:solid;
          border-left-style:none;
          border-top-style:none;
     }
     a#hide{
          padding-left:60px;
          display:${(props)=>(props.subDiv ? "flex" : "none")};
          overflow:hidden;
          height:${(props)=>(props.subDiv ? "80px" : "0px !important")};
          padding-right:0px;
          flex-shrink:0.01;
          @starting-style{
               height:0px;
          }
     }
     *{

          flex-grow:1;
          align-items:center;
          color: #f7f7f7;
          display:flex;
          background-color:#0f725e;
          height:80px;
          text-align:center;
          padding-right:20px;
     }
`;

function MobNav({state,h=0,className}){
     const [subDiv,setDiv]=useState(false);
     return(
          <>
               <Ul State={state} subDiv={subDiv} h={h} className={className}>
                    <a href='/Home'><li>Home</li></a>
                    <a href="/Design"><li>Design</li></a>
                    <a onClick={()=>(setDiv(!subDiv))}><li>Maintnence</li></a>
                         <a href='/Maintnence' id="hide"><li><Df>m</Df>Overview</li></a>
                         <a href='/Maintnence/Mulching' id="hide"><li><Df>m</Df>Mulching</li></a>
                         <a href='/Maintnence/Pruning' id="hide"><li><Df>m</Df>Pruning</li></a>
                    <a href="/Gallery"><li>Gallery</li></a>
                    <a href="/About"><li>About</li></a>
                    <a href='/FAQ'><li>FAQ</li></a>
                    <a href='/ContactUs'><li>Contact</li></a>
               </Ul>
          </>
     );
}

export default MobNav;
