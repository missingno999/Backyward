import {useState, useEffect} from 'react';
import {SquareFrame} from "./GlobalComponents.jsx";
import styled from "styled-components";
import Xout from "./assets/x-out.webp";

const FullVersion=styled(ImageCarousel)`
     ${(props)=>(props.visible ?
               `
               height:100vh;
               backdrop-filter: blur(3px);
               background-color:rgb(0 0 0 /50%);
               width: 100%;
               position:fixed;
               top:0px;
               display: flex;
               flex-direction: column;
               z-index:10;
               div#HHHH{
                    height: 1%;
                    flex-grow:1;
               }
               & *{
                    position: initial;
               }
               div#imageAndSub{
                    height:auto;
                    flex-grow:1;
                    width:1% !important;
                    flex-shrink:2;
                    div#ima{
                         flex-grow:1;
                         width:100%;
                         justify-content:center;
                    }
                    span{
                         display: initial !important;
                    }
                    div#sub{
                         background-image:radial-gradient(rgb(219 193 175/100%), rgb(219 193 175/100%), rgb(219 193 175/100%), rgb(219 193 175/0%));
                    }
               }` : `
               &,& *{
                    display:none;
               }
               `)}
`;


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
     ${(props)=>(props.controlType=="auto" ? "display: none;":"")}
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

     height: ${(props)=>(props.Height)}px;
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

const FullImg=styled.img`
     transform: scale(${(props)=>(`${props.zoom},${props.zoom}`)}) translate(${(props)=>(`${props.X}px,${props.Y}px`)});
`;
//IMPORTANT NOTE: Come back later and consider using vine sihlouette images to add a sort of border to the slide show. Otherwise, it looks really plain and kinda abrupt


/*
imageList=a list of images to cycle through
subtitleList=a list of strings, each of which would be associated with one image.
     Extras are ignored, and if their are more images than strings, only the first few images will recieve subtitles.
     null strings '' mean the current pic doesn't have a subtitle
controlType=if the carousel is automatic, user controlled, or both. 'auto', 'user', or 'both' are valid, all else are invalid.
canFullScreen=boolean for enabling/disabling fullscreen. Secretly has a 3rd option (=2) that will cause the carousel to only be full screen
tall=a string combining number and unit for what this component's renedered height should be
title=a string that can appear at the top of the component
itemIndex=the index of the picture to start the slide show on. Intended solely for fullscreen only, so no functionality on normal size
//transitions: a tagged string that allows for defining how images transition during changes. Unimplemented.
*/
//Needs a height supplied by user
function ImageCarousel({imageList, subtitleList=[], controlType="both",canFullScreen='1', Title='', autoNextDuration=5000, Height='400', className, itemIndex=0, toFull=()=>(console.log('e')), isFull=false,cursOver="Click for full screen"}){
     const [imageIndex, setImageIndex]=useState(itemIndex);//current image
     const [clickDrag,setDrag]=useState(false);
     const [limiter1,setL1]=useState(0);
     const [zoom,setZoom]=useState(1);
     const [X1,setX1]=useState(0);
     const [Y1,setY1]=useState(0);
     const [moX,setMOX]=useState(0);
     const [moY,setMOY]=useState(0);
     const [transX,setX]=useState(0);
     const [transY,setY]=useState(0);

     const [swipeStart,setSwipe]=useState(0);
     const [pinchZoom,setPinch]=useState({x1:0,y1:0});


     //Sets and resets the automatic increment timer
     useEffect(()=>{
          var timer=null;
          if(controlType!='user'){
               timer=window.setTimeout(()=>{incrementIndex()},autoNextDuration);
          }
          return (()=>(timer!=null ? clearTimeout(timer) : timer=null));
     },[imageIndex]);

     useEffect(()=>{
          setImageIndex(itemIndex);
          return(()=>{})
     },[itemIndex]);

     //advances to next slide, or loops back to start
     function incrementIndex(){
          setZoom(1);
          normalFull();
          if(imageIndex+1>imageList.length-1){
               setImageIndex((imageIndex+1)%imageList.length);
               //perform visual feedback
          }
          else{
               setImageIndex(imageIndex+1);
          }
     };

//advances to previous slide or loops back to start
     function decrementIndex(){
          setZoom(1);
          normalFull();
          if(imageIndex-1<0){
               setImageIndex(imageList.length-1);
               //perform visual feedback
          }
          else{
               setImageIndex(imageIndex-1);
          }
     };

     function zoomFunc(e){
          let a=zoom+(e.deltaY/100);
          if(a<0.01){
               setZoom(0.01);
          }
          else{
               if(a>3){
                    setZoom(3);
               }
               else{
                    setZoom(a);
               }
          }
     };

     function zoomFunc2(e){
          let a=zoom+((((pinchZoom.x1^2+pinchZoom.y1^2)^0.5)/(((e.touches[0].clientX-e.touches[1].clientX)^2+(e.touches[0].clientY-e.touches[1].clientY)^2)^0.5))/100-1);
          if(a<0.01){
               setZoom(0.01);
          }
          else{
               if(a>3){
                    setZoom(3);
               }
               else{
                    setZoom(a);
               }
          }

     };

     function normalFull(){
          setX(0);
          setY(0);
          setX1(0);
          setY1(0);
          setMOX(0);
          setMOY(0);
     }

     function startTouch(e){
          if(e.targetTouches.length==1){
               setDrag(true);
               setX1(moX+e.targetTouches[0].clientX);
               setY1(moY+e.targetTouches[0].clientY);

          }
          else{
               if(e.targetTouches.length==2){
                    setDrag(false);
                    setMOX(-1*transX);
                    setMOY(-1*transY);
               }
          }
     }

     function onTouchyMoving(e){
          if(clickDrag){
               setX(e.touches[0].clientX-X1);
               setY(e.touches[0].clientY-Y1);
          }
          /*if(e.touches.length>1){
               zoomFunc2(e);
          }*/

     }

     function endFUnc(e){
          if(controlType!="auto"){
               if(swipeStart.touches.length==1){
                    if(e.timeStamp-swipeStart.timeStamp<200){
                         if(e.changedTouches[0].clientX-swipeStart.touches[0].clientX>80){
                              decrementIndex();
                         }
                         else{
                              if(e.changedTouches[0].clientX-swipeStart.touches[0].clientX<-80){
                                   incrementIndex();
                              }
                         }
                    }
               }
          }
     }

     function onkeyup(e){
          if(controlType!="auto"){
               switch(e.key){//You don't actually need to have anything special to choose which element to foucs on. it works just fine automatically
                    case "ArrowRight":
                         incrementIndex();
                         break;
                    case "ArrowLeft":
                         decrementIndex();
                         break;
                    case "Enter":
                         if(canFullScreen==1){
                              toFull({vis: true, in: imageIndex});
                              e.target.blur();
                         }
                         else{
                              toFull({vis: false, in:0});
                              setZoom(1);
                              normalFull();
                         }
                    default:
                         break;
               }
          }
     }

     return(
          <>
          <div style={{maxHeight: window.innerHeight}} className={className} onTouchStart={(e)=>(setSwipe(e),(e.touches.length>=2 && setPinch({x1: e.touches[0].clientX-e.touches[1].clientX, y1: e.touches[0].clientY-e.touches[1].clientY})))}
          onTouchMove={(e)=>(onTouchyMoving(e))} onTouchEnd={(e)=>(setDrag(false),setMOX(-1*transX),setMOY(-1*transY),endFUnc(e))}
          onMouseUp={()=>(setDrag(false),setMOX(-1*transX),setMOY(-1*transY))} onMouseMove={(e)=>(clickDrag && (setX(e.clientX-X1),setY(e.clientY-Y1)))}>

               <TitleCounter id="kkkkkkk" className={className}>
                    {Title}
               </TitleCounter>
               <MainDiv fullScreenable={canFullScreen} id="HHHH" Height={Height} tabindex="0" onKeyUp={(e)=>(onkeyup(e))}>
                    <Button controlType={controlType} onClick={()=>{decrementIndex()}}><b><i>{'<'}</i></b></Button>
                         <div id="imageAndSub" title={!isFull && cursOver}  onWheel={(isFull ? (e)=>(setL1((limiter1+1)%5), ( limiter1==0 && zoomFunc(e) )) : ()=>{})}>
                              <Exit as="span" onClick={()=>{toFull({vis: false, in:0}),setZoom(1),normalFull()}}><img alt={"X out of fullscreen"} title={"Exit fullscreen"} src={Xout}></img></Exit>
                              <div id="ima" >
                                   {isFull ?
                                        <>
                                        <FullImg draggable={false} onTouchStart={(e)=>(startTouch(e))} onMouseDown={(e)=>(setDrag(true),setX1(moX+e.clientX),setY1(moY+e.clientY))}
                                        zoom={zoom} X={transX} Y={transY} id="currentImage" src={imageList[imageIndex]}></FullImg>
                                        </>
                                        :
                                        <>
                                        <img id="currentImage" src={imageList[imageIndex]} onClick={canFullScreen==1 ? (e)=>{toFull({vis: true, in: imageIndex}),e.target.blur()} : ()=>{}}></img>
                                        </>
                                   }
                              </div>
                              <div id="sub">{subtitleList.length>imageIndex  ? subtitleList[imageIndex]:''}</div>
                         </div>
                    <Button controlType={controlType} onClick={()=>{incrementIndex()}}><b><i>{'>'}</i></b></Button>
               </MainDiv>
               <TitleCounter class="gfgfgfgfgf">
                    {`${imageIndex+1}/${imageList.length}`}
               </TitleCounter>
          </div>
          </>

     );
}



function FullScreenCarousel({imageList, subtitleList, Title, itemIndex,isVisi,fromFull}){
     useEffect(()=>{
          isVisi ?  disableScroll() : enableScroll();
          var scrolling=false;
     },[isVisi]);

     function disableScroll(){
          document.getElementsByTagName("html")[0].style.overflowY="hidden";
     }

     function enableScroll(){
          document.getElementsByTagName("html")[0].style.overflowY="auto";
     }

     return(
          <>
               <FullVersion Title={Title} visible={isVisi} canFullScreen="0" imageList={imageList} subtitleList={subtitleList} controlType="user" itemIndex={itemIndex} toFull={fromFull} isFull={true}/>
          </>
     );
}



export {ImageCarousel};
export {FullScreenCarousel};
