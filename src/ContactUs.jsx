import styled from "styled-components";
import {useState} from 'react';
import axios from "axios";
import { useMediaQuery } from 'react-responsive';

import MainHeader from "./MainHeader.jsx";
import Pagepichead from "./Pagepichead.jsx";
import num30 from "./assets/0030.webp";

import {ParaButton,PurpButt} from "./GlobalComponents.jsx";

const PB2=styled(ParaButton)`
     @media (max-width:1100px){
          flex-direction: column;
          align-items:center;
     }
     hr{
          display:none;
     }
     div#Para{
          @media (max-width:1100px){
               div{
                    display: block;
                    flex-direction:column;
               }
               max-width:100% !important;

          }
     }
     div#Butt{
          @media (max-width:1100px){
               align-items: center;
               p{
                    text-align:center;
               }
          }
          max-width:500px;
          justify-content:flex-start;
     }
`;

const Hr=styled.hr`
     height: 5px;
     border-style: none;
     background-color:#ba9979;
     width: 80%;
     border-radius: 100%;
`;

const DatePlease=styled.form`
     input{
          width:66%;

          height: 42px;
          margin-bottom:10px;
          padding-top:10px;
          border-width: 1px;
     }
     input,textarea{
          border-radius:5px;
          border-style: inset;
          font-size:20px;
          @media(max-width:551px){
               width:99%;
          }
     }
`;

const Label=styled.label`
     position: absolute;
     font-family: Gentium-Plus;
     font-size:22px;
     padding-left: 3px;
     color:#783aad;
     transition-property: transform, color;
     transition-duration: 150ms,150ms;
     transition-timing-function:linear,linear;
     ${(props)=>(props.hasIt && `transform: scale(0.6,0.6) translate(-${(props.children.length/2)*0.5}ch,-10px); color:#0f725e;`)}
`;

const StatusDiv=styled.div`
     border-style: dotted;
     padding: 5px;
     transition-property:background-color;
     transition-duration:100ms;
     background-color: ${(props)=>(props.backing)};
     margin:5px;
     @media (max-width:1100px){
          margin-top: 10px;
     }


`;

function RGBlabel(props){
     switch(props.status){
          case 0:
               return(<><StatusDiv backing={"buttonFace"}><b>Status: Awaiting Input...</b></StatusDiv></>);
          case 1:
               return(<><StatusDiv backing={"#00FBFF"}>
                         <div style={{color: "#783AAD"}}><b>Status: Processing...</b></div>
                    </StatusDiv></>);
          case 200:
               return(<>
                    <StatusDiv backing={"#0EB191"}>
                         <div style={{color: "#0B019D"}}><b>Status: Your email has been successfully sent!</b></div>
                    </StatusDiv></>);
          case 404:
               return(<>
                    <StatusDiv backing={"#DB0F0F"}>
                         <div style={{color: "#FFDFA8"}}>
                              <b>Status: Error, server offline. Please try again later.</b>
                         </div>
                    </StatusDiv>
               </>)
          default:
               return(<>
                    <StatusDiv backing={"#DB0F0F"}>
                         <div style={{color: "#FFDFA8"}}>
                         <b>
                              Status: Error<br/>
                              Something has gone wrong, and we aren't sure what. Here are some options for next steps:<br></br>
                              <ul>
                                   <li> Check to make sure you're email is valid.</li>
                                   <li> Try calling us or send an email directly.</li>
                                   <li> Try coming back later, once in case there's a problem with our servers.</li>
                              </ul>
                         We apologize for the inconvinence.</b></div>
                    </StatusDiv></>);

     }

}

function FormItem(props){
     const [trans,setTrans]=useState(false);
     return(
          <>
               <Label style={{}} for={props.Type} hasIt={trans} >{props.children}</Label>
               <input alt={"Text input for "+props.children} required={props.required} type={props.daType} id={props.Type} name={props.Type}
               onFocus={()=>(setTrans(true))} onBlur={()=>(document.getElementById(props.Type).value=="" && setTrans(false))}></input>
               <br></br>
          </>
     );
}

const Eh=styled.p`
     @media(max-width:551px){
          margin-left:8px;
          margin-right:8px;
     }
`;

function ContactUs(){
     const nummm=useMediaQuery({query:'(max-width:1100px)'});
     const anotherNum=useMediaQuery({query:'(max-width:551px)'})
     const [resStat,setRes]=useState(0);

     async function sendEmail(){
          setRes(1);
          const name=document.getElementById("name").value;
          const message=document.getElementById("message").value;
          const email=document.getElementById("email").value;
          const results=await axios.post("http://localhost:5000/",{name:name,MMess:message,email:email}).catch((error)=>(setRes(404),console.log(error)));
          if(results.hasOwnProperty("data")){
               setRes(results.data);
          }
          else{
               setRes(results.response.data);
          }
     }

     return(
          <>
               <MainHeader/>
               <Pagepichead backing={num30}>
                    Contact Us!
               </Pagepichead>
               <Hr/>
               <PB2
                    para={<>
                              <DatePlease as={"div"} style={{marginLeft:10,marginRight:10}}onSubmit={false}>

                                   <FormItem daType="text" Type="name">
                                        Name:
                                   </FormItem>

                                   <FormItem daType="email" Type="email" required={true}>
                                        Email Address:
                                   </FormItem>

                                   <FormItem daType="text" Type="phone">
                                        Phone:
                                   </FormItem>

                                   <FormItem daType="text" Type="addr">
                                        Address (Street, City, Zip Code):
                                   </FormItem>

                                   <label for="message">Message:</label><br></br>
                                   <textarea alt="Text feild for your email to use" id="message" name="message" required rows={9} cols={45}></textarea>
                                   <br></br>

                                   <span onClick={()=>(sendEmail())} alt="Button to send your email"> <PurpButt Title="Send Email">Send</PurpButt></span>
                              </DatePlease>
                              {nummm && <RGBlabel status={resStat}/>}
                         </>
                    }
                    buttons={
                              <>
                                   <Eh>
                                        If you have a job for us, or would like to ask any questions, feel free to send us an email using the form on the left. Or, scroll to the bottom of this page for our email address and phone numbers. We look forward to hearing from you!
                                   </Eh>
                                   {!nummm && <RGBlabel status={resStat}/>}
                              </>
                    }
                    spacerShrinks={[1.2,1.6,1.4]}
                    nthBool={nummm}
               />
               <Hr/>
          </>
     )
}

export default ContactUs;
