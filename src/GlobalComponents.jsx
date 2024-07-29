import styled from "styled-components";
import {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';









//para buttons divs (same general fonts and div layouts. )
//1 row containing 2 divs in a column layout. One div is a para, the other is a buttons. They are seperated by large spacer divs that flex-shrink.
//Para divs are very standard, with the only real change being the text alignment
//Buttons can have just about anything
//Buttons and para tend to have max-widths, which can vary


const SpacerDiv=styled.div`
     width:1000px;
     flex-shrink:${(props)=>(props.shrink)};
`;



const ParaButt=styled.div`
     display:block flex;
     font-size:20px;
     flex-direction:row;
     background-color:#f7f7f7;
     div#Para{
          display:block flex;
          flex-direction:column;
          font-family:Gentium-Plus;
          justify-content:center;
          b{
               font-family:Times New Roman;
               font-size:22px;
          }
     }
     div#Butt{
          display:block flex;
          flex-direction:column;
          justify-content:space-around;

     }
`;

function ParaButton({className, para, buttons,spacerShrinks=[1.5,2,1.5],nthBool=false,maxWidth='702'}){
     const formatFIx=useMediaQuery({query:`(max-width:${maxWidth}px)`});

     return(
          <ParaButt className={className} id="Pily" nthBool={nthBool}>
               <SpacerDiv shrink={spacerShrinks[0]}></SpacerDiv>
               <div id={nthBool ? "Butt" : "Para"}>
                    {nthBool ? buttons : para}
               </div>
               <SpacerDiv shrink={spacerShrinks[1]}></SpacerDiv>
               <div id={nthBool ? "Para" : "Butt"}>
                    {nthBool ? para : buttons}
               </div>
               <SpacerDiv shrink={spacerShrinks[2]}></SpacerDiv>
               {formatFIx && <hr></hr>}
          </ParaButt>
     );
}

const PurpleButton=styled.button`
     transition-property: background-color,box-shadow;
     transition-duration: 400ms,100ms,100ms;
     font-family: Times New Roman;
     font-size: 23px;
     width:100%;
     border-radius:50px;
     background-color:#783aad;
     cursor: pointer;
     color: #f7f7f7;
     &&:hover{
          background-color:#b083d8;
     }
     &&:focus{
          text-decoration:underline;
          box-shadow: 0px 0px 15px 3px black;
     }
`;

function PurpButt({Title,children,className,Type="none"}){
     return(
          <PurpleButton onTouchEnd={(e)=>(e.target.blur())} onMouseUp={(e)=>(e.target.blur())} type={Type} className={className} title={Title}> {children}</PurpleButton>
     );

};

const DaSquares=styled.div`
     position: relative;
     width: 100%;
     overflow: hidden;
     &:before{
          content: "";
          display: block;
          padding-top: 100%;
     }
     & div{
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          text-align: center;
     }
`;

function SquareFrame({children,className}){

     return(
          <DaSquares className={className}>
               <div>
                    {children}
               </div>
          </DaSquares>
     );
}

const FullWidthParagraph=styled.div`
     background-color:#f7f7f7;
     p{
          font-family:Gentium-Plus;
          padding-left:16%;
          padding-right:16%;
          text-align:center;
          font-size:20px;
     }
     b{
          font-family:Times New Roman;
          font-size:22px;
     }
`;

const Adosdo=styled(FullWidthParagraph)`
     b{
          font-family:Gentium-Plus;
     }
     hr{
          height:3px;
          border-style:none;
          background-color:#ba9979;
          width:30%;
          border-radius:100%;
     }
`;

function IntroPara(props){
     return(
          <Adosdo className={props.className}>
               <hr></hr>
               <p>
                    <b>
                    {props.children}
                    </b>
               </p>
               <hr></hr>
          </Adosdo>
     );
}


const Wrapper=styled.div`
     display:flex;
     width:${(props)=>(props.mainWidth)};
     justify-content:space-around;
     flex-wrap:wrap;
     align-items:center;
     height:100%;
     @media (max-width:457px){
          flex-direction:column;
          width:100% !important;
     }

`;
const DDD=styled.div`
     display:flex;
     background-color:#783aad;
     @media(max-width:590px){
          justify-content:center;
     }
`;

function WrappingDiv({className, mainWidth='33%', spacerShrinks=[1.5,1.5],children}){
     const formatFIx=useMediaQuery({query:'(min-width: 590px)'});
     return(
          <DDD>
               {formatFIx ?
                    <>
                         <SpacerDiv shrink={spacerShrinks[0]}></SpacerDiv>
                              <Wrapper mainWidth={mainWidth} className={className}>
                                   {children}
                              </Wrapper>
                         <SpacerDiv shrink={spacerShrinks[1]}></SpacerDiv>
                    </>
               :
               <Wrapper mainWidth={mainWidth} className={className}>
                    {children}
               </Wrapper>}
          </DDD>
     )
}

const WB=styled.div`
     display:flex;
     border-radius:35px;
     border-style:solid;
     overflow:hidden;
     flex-direction:column;
     margin-top:10px;
     margin-bottom:10px;
     transition-property: transform,height;
     transition-duration:200ms,200ms;
     cursor:pointer;
     ${(props)=>(props.a)}
     @media(hover:hover){
          &&:hover{
               transform:scale(${(props)=>(props.scale)});
          }
     }
`;

function WrappedButtons({className,children,scale="1.1",Title,overA=false,touchStart=(function(n,a){n("transform: scale(0.9); transition-duration:90ms,200ms;")}), touchEnd=(function(n){n("")}) })      {
     const [a,sa]=useState("");
     return(
          <WB className={className} scale={scale} title={Title} a={a}
          onTouchStart={()=>(touchStart(sa,overA))} onTouchEnd={()=>(touchEnd(sa))}>
               {children}
          </WB>
     )
}

//Wrapping div-button
//div-buttons

//article.css

export {SquareFrame};
export {ParaButton};
export {PurpButt};
export {FullWidthParagraph};
export {IntroPara};
export {WrappingDiv};
export {WrappedButtons};
