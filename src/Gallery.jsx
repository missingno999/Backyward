
import styled from "styled-components";
import {useState} from 'react';

import MainHeader from "./MainHeader.jsx";

import Pagepichead from "./Pagepichead.jsx";
import Placeholder from "./assets/Placeholder.png";
import {ImageCarousel,FullScreenCarousel} from "./Image-carousel.jsx";

import {WrappingDiv,WrappedButtons,IntroPara} from "./GlobalComponents.jsx";

import logo from "./assets/logo.png";
import icon from "./assets/icon.png";

const imgListA=[{index:0, src: Placeholder},{index:1, src: logo},{index:2, src: icon},{index:3, src: logo}];
const imgListB=[Placeholder,logo,icon,logo];

const WB2=styled(WrappedButtons)`
     width:200px;
     height:200px;
     transition-property:transform, height,border-color,border-width;
     transition-duration:200ms, 200ms,100ms,100ms;
     img{
          height:100%;
     }
     &:focus-within{
          border-width:5px;
          border-color:#f7f7f7;
     }
`;

const AnotherDiv=styled.div`
     width:95%;
     border-radius:20px;
     overflow:hidden;
     margin: 2.5%;
`;

function Gallery(){
     const [visi,setVisi]=useState({vis: false, in: 0})

     function populateGallery(){
          return (imgListA.map((each)=>{
               return(
                    <WB2 Title="Click to zoom!" key={each.index}>
                    <img src={each.src}  tabindex="0" onKeyUp={(e)=>(e.key=="Enter" && setVisi({vis: true, in:each.index}))} onClick={()=>(setVisi({vis: true, in:each.index}))}></img>
                    </WB2>
               )
          }

     ));
     };

     return(
          <>
               <FullScreenCarousel isVisi={visi.vis} imageList={imgListB} subtitleList={[]} Title="" itemIndex={visi.in} fromFull={setVisi}/>
               <MainHeader/>
               <Pagepichead backing={Placeholder}>
                    Gallery
               </Pagepichead>
               <IntroPara>
                    Have a look at our past work! Click a picture to zoom in!
               </IntroPara>
               <AnotherDiv>
                    <WrappingDiv spacerShrinks={[5,5]} mainWidth="95%">
                         {populateGallery()}
                    </WrappingDiv>
               </AnotherDiv>
          </>
     )
};

export default Gallery;
export {imgListB};
