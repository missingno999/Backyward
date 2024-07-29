import styled from "styled-components";
const Df=styled.span`
     font-family:Kalocsai_Flowers;
     font-size:${(props)=>(props.fs)};
`;

const HeaderLinks=styled.a`
transition-property:color,background-size;
background-position:center;
background-image:radial-gradient(rgb(219 193 175/100%), rgb(219 193 175/100%), rgb(219 193 175/100%), rgb(219 193 175/0%), rgb(219 193 175/0%));
background-repeat:no-repeat;
background-size:0px 130%;
background-clip:padding-box;
transition-duration:300ms,600ms;
color:#f7f7f7;
flex-grow:1;
font-size:20px;
text-align:center;
text-decoration:none;

@media(hover:hover){
     &:hover{
          background-size:100% 130%;
          color:${(props)=>(props.theme.tcolo)};
     }
}
`;


const MaintnenceDiv=styled.div`
     flex-direction:column !important;
     flex-grow: 1 !important;
     width:auto;
     justify-content:center;
     *{
          flex-grow:0;
     }
     @media(hover:hover){
          &:hover ul{
               display:block;
               transform:translate(0px,0px);
               opacity:100%;
          }
     }
     div#spacer{
          transition-property:display;
          transition-duration:150ms;
          transition-behavior:allow-discrete;
          flex-shrink:3;
          height:102px;
          display:none;
     }
     @media(hover:hover){
          &:hover div#spacer{
               display:block;
          }
     }

`;

const HiddenList=styled.ul`

     transition-property:display,transform,opacity;
     transition-duration:150ms,150ms,150ms;
     transition-behavior:allow-discrete;
     position: relative;
     position-anchor: --Maintnence;
     width:80%;
     border-radius:${(props)=>(props.theme.br)};
     background-color:${(props)=>(props.theme.bcolo)};
     display: none;
     padding-left:16%;
     margin:0px;
     top: ${(props)=>(props.offset)}px;
     height:${(props)=>(props.theme.h)};;
     flex-shrink:3;
     list-style:none;
     text-indent:-1em;
     border-style:ridge;
     border-left-style:groove;
     border-top-style:${(props)=>(props.theme.bts)};
     border-color:#0f725e;
     transform:translate(0px,-${(props)=>(props.offset)}px);
     opacity:0%;

     li{
          color:#f7f7f7;
          font-size:20px;
          text-decoration:none;
          margin-top:8px;
          a{
               padding-right:4%;
               padding-left:4%;
          }
          *{
               padding-right:1%;
          }
     }
     @starting-style{
          transform:translate(0px,-${(props)=>(props.offset)}px) !important;
          opacity: 0% !important;
     }
`;
///!!NOTE: @starting-style is not supported by fire fox, and therefore might need some additional support for that browser
const headerThemeing={
     bcolo:"#0f725e",
     tcolo:"#783aad",
     h:"100px",
     br:"0 0 20px 20px",
     bts:"none"
}

const DivId1=styled.div`
     display:block flex;
     flex-grow:1; /*used in row component*/
     flex-shrink:1;
     justify-content:space-around;
     align-items:center;
`;


///IMPORTANT: This component expects to be in a flex block that has the row property
function HeadLinkRow({offset="30", homeStuff="", theme=headerThemeing}){
     return(
          <DivId1>
               <HeaderLinks href="#/Home" title="Home" theme={theme}>Home</HeaderLinks>
               <HeaderLinks href="#/Design" title="Design" theme={theme}>Design</HeaderLinks>
               <MaintnenceDiv>
                    <div id="spacer"></div> {/*devious way to keep the Maintnence link in the center*/}
                    <HeaderLinks href="#/Maintnence" title="Maintnence" theme={theme}>Maintnence</HeaderLinks>
                    <HiddenList offset={offset} homeStuff={homeStuff} theme={theme}>
                         <li><Df>m</Df><HeaderLinks href="#/Maintnence" title="Maintnence" theme={theme}>Overview</HeaderLinks></li>
                         <li><Df>m</Df><HeaderLinks href="#/Maintnence/Mulching" title="Mulching Service" theme={theme}>Mulching</HeaderLinks></li>
                         <li><Df>m</Df><HeaderLinks href="#/Maintnence/Pruning" title="Pruning Service" theme={theme}>Pruning</HeaderLinks></li>
                    </HiddenList>
               </MaintnenceDiv>
               <HeaderLinks href="#/Gallery" title="Gallery" theme={theme}>Gallery</HeaderLinks>
               <HeaderLinks href="#/About" title="About" theme={theme}>About</HeaderLinks>
               <HeaderLinks href="#/FAQ" title="FAQ" theme={theme}>FAQ</HeaderLinks>
               <HeaderLinks href="#/ContactUs" title="Contact" theme={theme}>Contact</HeaderLinks>
          </DivId1>
     );

}

export default HeadLinkRow;
