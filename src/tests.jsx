import {useState, useEffect,useCallback} from 'react';
import {SquareFrame} from "./GlobalComponents.jsx";
import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import Xout from "./assets/x-out.webp";


const Button=styled.button`
     border-style:none;
     border-radius: 100%;
     font-family: Courgette-Regular;
     cursor: pointer;
     width:60px;
     margin-left:15px;
     margin-right:15px;
     height:120px;
     align-self:center;
     background-image:radial-gradient(#0eb191,#0f725e);
     display:${(props)=>(props.theme.displayB)};
     @media (max-width:501px){
          display:none;
     }
`;

const MainDiv=styled.div`
     display:flex;
     flex-direction: row;
     justify-content: center;
     margin-left:5px;
     margin-right:5px;
     height:${(props)=>(props.theme.height)};
     div#imageAndSub{
          display: flex;
          flex-direction: column;
          width:50%;
          @media (max-width:769px){
               width:90%;
          }
          @media (max-width:501px){
               ${`${document.getElementById}`}
               width:100%;
          }
          align-items: center;
          ${(props)=>(props.fullScreenable!='0' ? "cursor:zoom-in;" : "")}
          span{
               display:none;
          }
          div#sub{
               font-family: Gentium-Plus;
               font-size:20px;
               text-align:center;
               flex-shrink: 1;
          }
          div#ima{
               overflow: hidden;
               flex-grow: 1;
               flex-shrink: 2;
               display: flex;
               height: 1%;

               align-items: center;
               img#currentImage{
                    max-height: 100%;
                    max-width:100%;
               }
          }
     }
`;

const TitleCounter=styled.div`

     font-family: Courgette-Regular;
     padding-bottom:3px;
     color: #783aad;
     width:100%;
     text-align: center;
     flex-shrink:1;
     background-color:#f7f7f7;
     height:${(props)=>(props.children==='' ? '1lh;' : 'auto;')}
     font-size:22px;
`;

const Exit=styled(SquareFrame)`
     position:fixed;
     align-self:flex-end;
     font-size: 25px;
     cursor: pointer;
     z-index:100;

`;

const evvent=new CustomEvent("eve",{detail:"Hoi!"});
const fullScreenEvent=new CustomeEvent("fullF",{detail:});
//function launchFullScreen(imageIndex,e){
/*(e)=>(launchFullScreen(imageIndex,e.target.className))*/
//}

//classes define whether the function that extents the prototype are fullscreen or not, which can then allow for more specific css selection
function ProtoCarousel({imageList,subList,Title,classes}){
     const [imageIndex,setIndex]=useState(0);
     return(
          <>
               <TitleCounter id={"T_"/*"kkkkkkk"*/} className={classes}>
                    {Title}
               </TitleCounter>
               <MainDiv id={"M_"} className={classes}>
                    <Button id={"L_"} className={classes} onClick={()=>(window.dispatchEvent(evvent))} ><b><i>{'<'}</i></b></Button>
                    <div id={"imageAndSub"} class={classes}>
                         <div id={"ima"} class={classes}>
                              <img id={"currentImage"} onClick={()=>{}} class={classes} src={imageList[imageIndex]}/>
                         </div>
                         <div id={"sub"} class={classes}>{subList.length>imageIndex  ? subList[imageIndex]:''}</div>
                    </div>
                    <Button id={"R_"} className={classes}><b><i>{'>'}</i></b></Button>
               </MainDiv>
               <TitleCounter id={"C_"/*"gfgfgfgfgf"*/} className={classes}>
                    {`${imageIndex+1}/${imageList.length}`}
               </TitleCounter>
          </>
     );
}


function StandardCarousel(imageList,subList,Title,{Height=400,controlType}){
     //useEffect
     /*const sss=useCallback((e)=>{console.log(e.detail)},[]);
     useEffect(()=>{
               window.addEventListener('eve',sss);
          return(()=>{});
     },[sss]);*/

     return(
          <>
               <div onClick={(e)=>(jjj(e))}>
               <ThemeProvider theme={{displayB:(controlType=="auto" ? "none" : "auto"),height:`${Height}px`}}>
                    <ProtoCarousel imageList={imageList} subList={subList} Title={Title} classes={"stand"}/>
               </ThemeProvider>
               </div>
          </>
     );
}

function FullScreenCarousel(imageList,subList,Title,{hi}){

     function daGood(){
          let k=document.getElementsByClassName("full");
          console.log(k[1]);
     }

     function jjj(e){
          console.log(e.target.id);
     }

     return(
          <>
               <div style={{display: "none"}} onClick={(e)=>(jjj(e))}>
               <ThemeProvider theme={{display:"auto",height:'100vh'}}>
                    <ProtoCarousel imageList={imageList} subList={subList} Title={Title} classes={"full"}/>
               </ThemeProvider>
               </div>
               {daGood()}
          </>
     )

}


function TrueCarousel({imageList,subList,Title,INvars=null,IFvars=null}){

     const sss=useCallback((e)=>{console.log(e.detail)},[]);
     useEffect(()=>{
               window.addEventListener('eve',sss);
          return(()=>{});
     },[sss]);

     return(
          <>
               <div>hi</div>
               {INvars!=null && StandardCarousel(imageList,subList,Title,INvars)}
               {IFvars!=null && FullScreenCarousel(imageList,subList,Title,IFvars)}
          </>
     );
}

export default TrueCarousel;
