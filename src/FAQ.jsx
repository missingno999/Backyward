import styled from "styled-components";
import {useState} from "react";

import MainHeader from "./MainHeader.jsx";
import Pagepichead from "./Pagepichead.jsx";
import Placeholder from "./assets/Placeholder.png";
import {IntroPara} from "./Pagepichead.jsx";

const BackDrop=styled.div`
     padding: 5%;
     div:nth-last-child(1 of div#false){
          border-radius: 0% 0% 20px 20px;
          border-bottom-style:solid;
     }
`;

const CollapHead=styled.div`
     &:first-of-type,div:last-of-type{
          border-radius: 20px 20px 0% 0%;
     }
     &&:last-of-type{
          border-radius: 0% 0% 20px 20px;
     }
     font-size:22px;
     border-style:solid;
     border-color:black;
     padding:20px;
     color: #f7f7f7;
     background-color:${(props)=>(props.styling ? '#ba9979':'#783aad')};
     font-family:Gentium-Plus;
     transition-property: border-radius;
     transition-duration:${(props)=>(props.id=='true' ? '0':'50')}ms;
     transition-delay:${(props)=>(props.id=='true' ? '0':'500')}ms;
     *::before{
          content: " + ";
          font-weight: 1000;
     }
     &&+div{
          background-color:${(props)=>(props.styling ? '#dbc1af':' #b083d8')};
     }

`;

const CollapBody=styled.div`
     transition-property: display,max-height,padding-top,padding-bottom,border-radius;
     transition-duration:500ms,500ms,500ms,500ms,500ms,0ms;
     transition-delay: 0ms,0ms,0ms,0ms,${(props)=>(props.open ? '500ms':'0ms')};
     transition-behavior: allow-discrete;
     max-height:500px;
     display: ${(props)=>(props.open ? 'flex':`none; max-height:0px !important;
          padding-top:0px !important;
          padding-bottom:0px !important`)};
     padding: 25px;
     font-size:18px;
     border-left-style:solid;
     border-right-style:solid;
     &&+div{
          border-top-style: ${(props)=>(props.open ? 'solid':`none`)};
     }
     *{
          overflow:hidden;
          display:block;
          transition-property: display,max-height;
          transition-duration:500ms,500ms;
          ${(props)=>(props.open ? 'max-height:500px':'max-height:0px')};
          @starting-style{
                    max-height:0px;
          }
     }
     @starting-style{
               max-height:0px;
               padding-top:0px;
               padding-bottom:0px;
     }
`;

function CollapsibleDiv(props){
     const [open, setOpen]=useState(false);

     return(
          <>
               <CollapHead styling={props.styling} tabindex="0" id={open.toString()} onKeyUp={(e)=>(e.key=="Enter" && setOpen(!open))} onClick={()=>(setOpen(!open))}>
                    <span>{props.Q}</span>
               </CollapHead>
               <CollapBody open={open} id={(!open).toString()}>
                    <span>{props.children}</span>
               </CollapBody>
          </>
     )
}



function FAQ(){
     return(
          <>
               <MainHeader/>
               <Pagepichead backing={Placeholder}>
                    FAQ
               </Pagepichead>
               <IntroPara>
                    Some answers to common questions!
               </IntroPara>
               <BackDrop>
                    <CollapsibleDiv styling={true} Q="What kind of landscaping do you do?">
                         Our specialty is garden maintenance and renovation. We offer spring and fall clean-ups, regular garden maintenance including pulling weeds by hand, pruning and trimming. Our approach to garden renovations is to work with the existing garden plants to bring back their beauty, removing any that no long work while adding in new ones to give the garden a fresh look.
                    </CollapsibleDiv>
                    <CollapsibleDiv styling={false} Q="Are you insured and licensed?">
                         We are fully insured for all of our projects. Our herbicide applicators are certified by the state of Wisconsin to apply herbicides and fertilizers. However, we use herbicide as sparingly as possible as we prefer to hand weed.
                    </CollapsibleDiv>
                    <CollapsibleDiv styling={true} Q="Do you install hardscape projects?">
                         We can install flagstone stepper walkways, paver and natural stone walkways up to 40', small patios, fire pit kits, dry river beds and rain gardens. However, we are not able to install large scale hardscape projects.
                    </CollapsibleDiv>
                    <CollapsibleDiv styling={false} Q="Do you mow lawns or provide lawncare?">
                         No, we do not offer these as regular services. We may mow or apply fertilizer in a special situation. However, we do offer lawn edging as a regular service and occasionally will offer lawn aeration.
                    </CollapsibleDiv>
                    <CollapsibleDiv styling={true} Q="Do you offer snow removal services?">
                          No, we do not offer any snow removal services.
                    </CollapsibleDiv>
               </BackDrop>
          </>
     )
}

export default FAQ;
