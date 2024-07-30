import styled from "styled-components";

import MainHeader from "./MainHeader.jsx";
import Pagepichead from "./Pagepichead.jsx";

import num7 from "./assets/2007.webp";

import {IntroPara,ParaButton,SquareFrame} from "./GlobalComponents.jsx";

const ParaButtonStyled=styled(ParaButton)`
     background-color: #f7f7f7;
     justify-content: center;
     padding-top:30px;
     padding-bottom:20px;
     @media (max-width:602px){
          flex-direction: column;
          padding-top:0px;
          hr:first-of-type{
               margin-top:30px;
               height:3px;
               width:70%;
               border-radius:100%;
               background-color:#783aad;
          }

     }
     p{
          margin:5px;
     }
     div#Para{
          margin-left:5px;
          margin-right:5px;
          max-width:700px;
          background-color:#dbc1af;
          border-radius: 20px;
          padding: 5px;
          border-style:solid;
          border-color:#0f725e;
          box-shadow: 0px 0px 11px 2px #0f725e;
          @media (max-width:602px){
               margin:5px;
               align-items: center !important;
               max-width:100% !important;
               *{
                    text-align: center;
               }
          }
     }
     div#Butt{
          padding:10px;
          min-width:250px;
          justify-content:center;
          flex-grow:1;
          @media (max-width:602px){
               align-items: center;
          }
     }

`;

const SquareF2=styled(SquareFrame)`
     border-radius:100%;
     align-self:center;
     img{
          height:auto;
          max-width:200%;

          align-self: center;
     }
`;

function About(){
     return(
          <>
               <MainHeader/>
               <Pagepichead backing={num7}>
                    About Us
               </Pagepichead>
               <IntroPara>
                    Learn about our values!
               </IntroPara>
               <ParaButtonStyled
                    para={<>
                              <b><p>Our Stroy</p></b>
                              <p>
                              Backyard Havens Gardening & Landscaping, LLC was formed in spring of 2008. It is owned and operated by a husband and wife team, Matt and Tammy.  After working for other companies for 15 years, Matt decided to start working for himself while taking care of their young sons. The business grew faster than he expected that year. After being pulled into helping with the business and needing to be more flexible in caring for their sons, Tammy joined the company in the fall of 2008. Backyard Havens has grown considerably since its start more than 10 years ago.
                              </p>
                         </>
                    }

                    buttons={
                              <>
                                   <SquareF2>
                                        <img src={num7}></img>
                                   </SquareF2>
                              </>
                         }
                    spacerShrinks={[1.2,1.1,1.2]}
                    nthBool={true}
               />
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
                                        <img src={num7}></img>
                                   </SquareF2>
                              </>
                         }
                    spacerShrinks={[1.2,1.1,1.2]}
                    nthBool={false}
               />
          </>
     );
}

export default About;
