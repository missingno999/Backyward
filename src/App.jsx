import styled from "styled-components";
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive'

import LogoPlus from "./logoPlus.jsx";
import MainHeader from "./MainHeader.jsx";

import num16 from "./assets/0016.webp";
import num5 from "./assets/005.webp";
import num17 from "./assets/0017.webp";
import num14 from "./assets/0014.webp";
import num3 from "./assets/22003.webp";
import num26 from "./assets/20026.webp";
//0016 for trimming button
//005 for mulching
//0017 for design
//0014 for maintnence
//003 for background
//0026 for Philosophy


import {ImageCarousel,FullScreenCarousel} from "./Image-carousel.jsx";
import {HeadLinkRow,IntroPara,ParaButton,PurpButt,SquareFrame,WrappingDiv,WrappedButtons} from "./GlobalComponents.jsx";
import {imgListB} from "./Gallery.jsx";

import './App.css';



const IP2=styled(IntroPara)`
     background-image:linear-gradient(#b083d8,#b083d8,#783aad);
     hr:first-of-type{
          visibility: hidden;
          margin:0px;
     }
     hr{
          margin-bottom:0px;
     }
     b{
          font-family:Courgette-Regular;
     }
     margin:0px;
`;

const HomeBack=styled.div`
     background-image:url(${(props)=>(props.b)});
     background-size:cover;
     background-repeat:no-repeat;
     width:100%;
     height:100vh;
     div#phoneNum{
          text-shadow: black 0px 0 2px;
          z-index:30;
          display: flex;
          position:absolute;
          width:100%;
          justify-content:center;
          top:0;
          @media (max-width: 768px){

               overflow:hidden;
               z-index:0;
               top:95px;
               justify-content:flex-end;
               p{

                    background-image: radial-gradient(rgb(0 0 0/80%), rgb(0 0 0/0%));
                    background-clip:padding-box;
                    background-size: 200% 100%;
                    background-position:left;
                    background-repeat:no-repeat;
               }
          }
          min-height: 0;

          p{
               color: #f7f7f7;
               font-size: 20px;
               padding: 10px;
               margin-top:10px;
          }
     }
`;

const SquareF2=styled(SquareFrame)`
     border-radius:100%;
     align-self:center;
     img{
          height:auto;
          max-width:100%;
          align-self: center;
     }
`;

const ParaButtonStyled=styled(ParaButton)`
     background-color: #dbc1af;
     justify-content: center;
     padding-top:30px;
     padding-bottom:20px;
     @media (max-width:521px){
          flex-direction: column;
          padding-top:10px;
          padding-bottom:10px;
          hr{
               display:none;
          }

     }
     p{
          margin:5px;
     }
     button{
          width:250px;
          margin-top:5px;
     }
     div#Para{
          @media (max-width:521px){
               align-items: center !important;
               max-width:100% !important;
               *{
                    text-align: center;
               }
          }
          max-width:700px;
     }
     div#Butt{
          @media (max-width:521px){
               align-items: center;
          }
          padding:10px;
          justify-content:space-around;
          flex-grow:1;
     }

`;

const WB2=styled(WrappedButtons)`
     align-items: center;
     max-width:200px;
     height:${(props)=>(props.open ? "380px" : "3em")};
     background-color: #ba9979;
     justify-content: space-around;
     img{
          transition-propery: filter;
          transition-duration:200ms;
          height:190px;/*${(props)=>(props.open ? "190px" : "100%")}*/
     }
     div{
          display: flex;
          overflow: visible;
          align-items: center;
          flex-direction: column;
          margin-top: 10px;
          margin-bottom: 10px;
          justify-content: flex-start;
          height:50%;
          width:100%;
          h4{
               transition-property: transform,text-shadow;
               transition-duration:200ms;
               ${(props)=>(!props.open && 'transform:translate(0px,calc(-145px + -3em)); text-shadow: #dbc1af 0px 0 2px,#dbc1af 0px 0 5px;')}
               font-family: Times New Roman;
               font-size: 23px;
               margin-block-start:1em;
               margin-block-end:1em;
               text-align: center;
          }
          p{
               margin-top:15px;
               margin-bottom:15px;
               font-family: Gentium-Plus;
               font-size: 20px;
          }
     }
`;

WB2.defaultProps={
     open:true
};

function CollapsibleButtons({image,children,linked}){
     const [isOpen,setOpened]=useState(false);
     const [a,sa]=useState(false);

     return(
          <>
               <span onClick={()=>(!isOpen && (setOpened(!isOpen),sa(true) ))}>
                    <WB2 Title="Click to learn more" open={isOpen} overA={a} touchStart={(function(n,a){n(!a ? "transform: scale(0.9); transition-duration:90ms,200ms;" : "")})}>
                         <img src={image} style={!isOpen ? {filter: "blur(1px)"}:{filter: "blur(0px)"}} onTouchStart={()=>(isOpen && sa(false))} onClick={()=>(setOpened(!isOpen))}></img>
                         <div>
                              {children}
                              <a href={linked}> <PurpButt>Learn More{">>>"}</PurpButt></a>
                         </div>
                    </WB2>
               </span>
          </>
     );
}

const MobileHomeHeader=styled(MainHeader)`
     border-style: none;
     background: radial-gradient(rgb(0 0 0/90%), rgb(0 0 0/0%));
     background-position: bottom;
     background-repeat: no-repeat;
     background-size: 100% 200%;
     position:absolute;
     button{
          background:none;
     }
`;

function Imaginationg(){
     const [imagees,setImagees]=useState(imageShuffle(3));

     function imageShuffle(numImages){
          let goods=[];
          let hold={}
          for(let i=0; i<numImages;i++){
               goods[i]=i;
          }
          for(let i=0; i<numImages;i++){
               let rand=(Math.floor(Math.random()*(imgListB.length-0.001)));
               if(rand<numImages){
                    if(rand!=i){
                         let u=goods[i];
                         goods[i]=goods[rand];
                         goods[rand]=u;
                    }
               }
               else{
                    if(hold.hasOwnProperty(rand)){
                         let u=goods[i];
                         goods[i]=hold[rand];
                         hold[rand]=u;
                    }
                    else{
                         hold[rand]=goods[i];
                         goods[i]=rand;
                    }
               }
          }
          var trueGoods=[]
          for(let i=0; i<numImages;i++){
               trueGoods[i]=imgListB[goods[i]];
          }
          return trueGoods;
     };

     return(
          <a href="/Gallery"><ImageCarousel imageList={imagees} Title="A look at our displays" controlType="auto" canFullScreen="0" toFull={function(trash){}} Height="300" cursOver={"Click for our Gallery!"}/></a>
     )
}

function Home() {
     const mobile=useMediaQuery({query:'(max-width: 768px)'});
     const reallyMobile=useMediaQuery({query:'(max-width: 490px)'});

     return (
          <>
          <link rel="preload" as="image" href={num26}/>
          <MainHeader homePageProp={1}/>
               <HomeBack b={num3}>
               {!mobile ?
                    <>
                         <header id="home">
                              <div>
                                   <LogoPlus align="end"/>
                              </div>
                              <div>
                                   <div id="header">
                                        <HeadLinkRow offset="10" theme={{h: "98px", bts: "groove", br: "20px 20px 20px 20px", bcolo: "#783aad", tcolo:"#0f725e !important"}}/>
                                   </div>
                              </div>
                              <div id="phoneNum">
                                   <div></div>
                                   <p> (608) 228-0400</p>
                              </div>
                         </header>
                    </>
                    :
                    <>
                         <MobileHomeHeader homePageProp2={1}/>
                         <div id="phoneNum">
                              <p> (608) 228-0400</p>
                         </div>
                    </>}
               </HomeBack>

               <ParaButtonStyled
                    para={<>
                              <b><p>Our Philosophy</p></b>
                              <p>
                              Backyard Havens Gardening & Landscaping is committed to promoting healthy and functional gardens through personalized service. Whether your project is installation of a single tree or a full-scale landscape project, you will receive high quality, professional service which respects your personal gardening taste. We provide fine gardening services and garden renovations as well as full landscape installation.
                              </p>
                         </>
                    }

                    buttons={
                              <>
                                   <SquareF2>
                                        <img src={num26}></img>
                                   </SquareF2>
                                   <a href="/About"><PurpButt Title="Learn who we are">Learn More {">>>"}</PurpButt></a>
                              </>
                         }
                    spacerShrinks={[5,5.7,5.2]}
                    nthBool={false}
                    maxWidth={"521"}
               />
               <IP2><b>Explore our array of services!</b></IP2>
               <WrappingDiv spacerShrinks={[5,5]} mainWidth="85%">
               {!reallyMobile ?
                    <>
                         <a href='/Design'>
                         <WB2 Title="Click to learn more">
                              <img src={num17}></img>
                              <div>
                                   <h4>Design</h4>
                                   <p>We do designs!</p>
                                   <p>{">>>"}</p>
                              </div>
                         </WB2>
                         </a>
                         <a href='/Maintnence'>
                         <WB2 Title="Click to learn more">
                              <img src={num14}></img>
                              <div>
                                   <h4>Maintnence</h4>
                                   <p>We maintain!</p>
                                   <p>{">>>"}</p>
                              </div>
                         </WB2>
                         </a>
                         <a href='/Maintnence/Mulching'>
                         <WB2 Title="Click to learn more">
                              <img src={num5}></img>
                              <div>
                                   <h4>Mulch</h4>
                                   <p>We mulch!</p>
                                   <p>{">>>"}</p>
                              </div>
                         </WB2>
                         </a>
                         <a href='/Maintnence/Pruning'>
                         <WB2 Title="Click to learn more">
                              <img src={num16}></img>
                              <div>
                                   <h4>Trimming</h4>
                                   <p>We do it all!</p>
                                   <p>{">>>"}</p>
                              </div>
                         </WB2>
                         </a>
                    </>
               :
                    <>
                         <CollapsibleButtons image={num17} linked={'/Design'}>
                              <h4 >Design</h4>
                              <p>We do designs!</p>
                         </CollapsibleButtons>

                         <CollapsibleButtons image={num14} linked={'/Maintnence'}>
                              <h4>Maintnence</h4>
                              <p>We maintain!</p>
                         </CollapsibleButtons>

                         <CollapsibleButtons image={num5} linked={'/Maintnence/Mulching'}>
                              <h4>Mulch</h4>
                              <p>We mulch!</p>
                         </CollapsibleButtons>

                         <CollapsibleButtons image={num16} linked={'/Maintnence/Pruning'}>
                              <h4>Trimming</h4>
                              <p>We do it all!</p>
                         </CollapsibleButtons>

                    </>
               }
               </WrappingDiv>
               <Imaginationg/>

          </>
     );
}

export default Home;