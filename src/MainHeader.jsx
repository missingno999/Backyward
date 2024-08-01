import styled from "styled-components";
import {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive'

import LogoPlus from "./logoPlus.jsx";
import ham from "./assets/ham.webp";

import {HeadLinkRow} from "./GlobalComponents.jsx";
import MobNav from "./mobileNavigation.jsx";



const MainHead=styled.header`
     z-index:2;
     border-bottom-style:ridge;
     border-color:#0f725e;
     display:${(props)=>(props.h!=0 ? "none":"flex")};
     position:fixed;
     background-color:#0f725e;
     transition-property:transform, opacity,display;
     transition-duration:500ms,200ms,500ms;
     transition-behavior:allow-discrete;
     transition-delay:0ms,${(props)=>(props.h!=0 ? '0ms':'180ms')},0ms;
     transform:translate(0, ${(props)=>(props.h!=0 ? "-95px":"0px")});
     opacity:${(props)=>(props.h!=0 ? "0":"1")};
     height:95px;
     width:100%;
     flex-direction:row;
     justify-content:space-between;
     anchor-name: --mainHeader;
     @starting-style{
          transform:translate(0,-95px);
          opacity:0;
     }
     div#hoi{
          flex-grow:0.2;
     }
     div{
          display:block flex;
          flex-shrink:1;
     }

`;

const Hammy=styled.button`
     width:64px;
     height:64px;
     background-color:#ba9979;
     align-self:center;
     margin-left:20px;
     border-radius:100%;
     z-index:100;
`;

const MobileHomeUL=styled(MobNav)`
     border-style:none;
     background: radial-gradient(rgb(0 0 0/90%), rgb(0 0 0/0%));
     background-position: right;
     background-repeat: no-repeat;
     background-size: 150% 150%;
     position:absolute;
     button{
          background:none;
     }
     *{
          background:none;
     }
     &~div#clickable{
          position:absolute;
     }
`;


//homePageProp=boolean for if the header is on a normal page, or on the home page where different behavior is expected
function MainHeader({homePageProp=0,className,homePageProp2=0}){
     const [hidden, setHidden]=useState(homePageProp!=0 ? 1 : 0);
     const [open, setOpen]=useState(true);
     const mobile=useMediaQuery({query:'(max-width: 768px)'});

     useEffect(()=>{
          if(homePageProp!=0){
               const target=document.getElementById("Pily");
               window.addEventListener('scroll',(event)=>{
                    if((window.innerHeight<=95 && target.getBoundingClientRect()['y']<=0) || (window.innerHeight>95 && target.getBoundingClientRect()['y']<=95)){
                         setHidden(0);
                    }
                    else{
                         setHidden(1);
                    }
               });
          }
          return(()=>{});
     },[]);


     return(
          <>
          <MainHead h={hidden} isMobile={mobile} className={className}>
          { !mobile ?
               <>
               <div id="hoi">
                    <a title="Home" href='/Home'><LogoPlus align='start' /></a>
               </div>
               <HeadLinkRow/>
               </>
               :
               <>
               <Hammy onClick={()=>(setOpen(!open))}><img alt={"Navigation"} src={ham}></img></Hammy>
               <div id="hoii">
                    <a title="Home" href='/Home'><LogoPlus align='end' /></a>
               </div>
               </>
          }
          </MainHead>
          {mobile && (homePageProp2!=0 ? <MobileHomeUL state={open} close={setOpen} h={hidden}/>:<MobNav state={open} close={setOpen} h={hidden} />)}
          </>
     )
}

export default MainHeader;
