import styled from "styled-components";
import "./fontDir.css";

const Hr=styled.hr`
     height:5px;
     background-color:#ba9979;
     border-style:none;
     margin-left:0;
     width:30%;
     align-self:start;
`;

const H2=styled.h2`
     color:#0f725e;
     margin-bottom:0;
     font-family:Courgette-Regular;
`;

const P=styled.p`
     color:#693399;
`;


function ContactDiv(props){

     return(
          <div style={{marginLeft:10,marginRight:10}}>
               <div className="ContactTitle">
                    <H2>{props.title}</H2>
                    <Hr></Hr>
               </div>

               <div>
                    <P>{props.children}</P>
               </div>
          </div>
     )
}

const Divv=styled.div`
          background-color:${(props)=>(props.color)};
          display: block flex;
          justify-content:space-evenly;
          border-top-style:${(props)=>(props.bord)};
          @media (max-width:660px){
               flex-wrap:wrap;
          }
          ${(props)=>(props.bord=="groove" && "@media(max-width:561px){text-align:center; padding-left:10px; padding-right:10px;}")}
`;


function Contact(){
     return(
          <>
               <Divv color='#dbc1af' bord="none" className="main">
                    <ContactDiv title="Phone">
                         (608) 333-9520 to reach Matt
                         <br/>
                         (608) 228-0400 to reach Tammy
                    </ContactDiv>
                    <ContactDiv title="Email">
                         backyardhavens@gmail.com
                    </ContactDiv>
                    <ContactDiv title="Service Area">
                         We service the greater Madison, WI area.
                    </ContactDiv>
               </Divv>
               <Divv color='#f7f7f7' bord="groove">
                    <p>Copyright © 2021 Backyard Havens Gardening & Landscaping - All Rights Reserved.</p>
               </Divv>
          </>
     )
}

export default Contact;
