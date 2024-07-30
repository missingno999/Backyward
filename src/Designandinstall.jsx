import styled from "styled-components";
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive';

import Pagepichead from "./Pagepichead.jsx";

import Placeholder from "./assets/Placeholder.png";
import logo from "./assets/logo.webp"
import icon from "./assets/icon.webp"

import MainHeader from "./MainHeader.jsx"
import {ImageCarousel,FullScreenCarousel} from "./Image-carousel.jsx";
import {IntroPara,ParaButton,Df} from "./GlobalComponents.jsx";

function Carousel(){
     const [visi,setVisi]=useState({vis: false, in: 0})
     return(
     <>
          <ImageCarousel imageList={[Placeholder,logo,icon,icon]} autoNextDuration="5000" controlType="both" Title="A look at our displays" toFull={setVisi} Height="300"/>
          <FullScreenCarousel isVisi={visi.vis} imageList={[Placeholder,logo,icon,icon]} subtitleList={[]} Title="A look at our display" itemIndex={visi.in} fromFull={setVisi}/>
     </>
     )
}


const ParaButtonStyled=styled(ParaButton)`
     @media (max-width:702px){
          flex-direction: column;
          padding-top:10px;
          padding-bottom:10px;
          hr{
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
     img{
          max-width: 100%;
          max-height: 75%;
          align-self: center;
     }
     div#Para{
          @media (max-width:702px){
               align-items: center !important;
               max-width:100% !important;
               *{
                    text-align: center;
               }
          }
          align-items:center;
          justify-content:center;
          max-width: 40%;
     }
     div#Butt{
          @media (max-width:702px){
               align-items: center;
          }
          width:100%;
          justify-content:center;
          align-content:center;
     }
`;

const RainGardenHold=styled.div`
     display:flex;
     width:100%;
     justify-content:center;
     background-color: #f7f7f7;
     padding-top:15px;
     padding-bottom:15px;
     div#Para{
          border-radius:50px;
          background-image: radial-gradient(rgb(14 177 145/100%),rgb(14 177 145/0%));
     }
`;

const RainGarden=styled(ParaButtonStyled)`
     background-color: #0f725e;
     width:85%;
     border-radius:90px;
     overflow:hidden;
     hr{
          display:none;
     }
`;

function Designandinstall(){
     const formatFIx=useMediaQuery({query:'(min-width: 1000px)'});
     const nummm=useMediaQuery({query:'(max-width:702px)'});

     return(
          <>
          <MainHeader/>
               <Pagepichead backing={Placeholder}>
                    Design and Installation
               </Pagepichead>
               <IntroPara>
                         Is your garden ready for a face lift? Our approach to garden renovations is to work with the existing garden plants to bring back their beauty, removing any that no long work while adding in new ones to give the garden a fresh look.  Are you thinking about adding a new garden space? Let us design a new garden for you with all the important elements you are looking for.
               </IntroPara>

               <ParaButtonStyled
                    para={<>

                              <p><Df>g</Df><b>Spring</b><Df>G</Df></p>
                              <p>
                              As the snow from winter starts to melt, nothing cheers you up more than seeing color in the garden. Spring blooming bulbs offer a variety of colors that bloom throughout the spring season and into summer. However, bulbs need to be planted the previous fall so they have a chance to chill over the winter. Cool season annuals that tolerate cold temperatures can be planted to provide that early color we all look forward to.
                              </p>
                         </>
                    }

                    buttons={
                         <>
                              <img src={Placeholder}></img>
                         </>
                    }
                    spacerShrinks={[1.6,1.7,1.6]}
                    nthBool={true}
               />

               <ParaButtonStyled
                    para={<>
                              <p><Df>g</Df><b>Summer</b><Df>G</Df></p>
                              <p>
                                   Warm summer months are the time for annual flowers to really shine!  Annuals can be planted in a bed by themselves to provide a showcase display or they can be spotted into the perennial garden to provide pops of color. Planting containers with annuals allows for flexibility - the containers can accent an entryway, enhance an entertaining area or be placed in the garden to add a little drama.
                              </p>
                         </>
                    }

                    buttons={
                              <>
                                   <img src={Placeholder}></img>
                              </>
                         }
                    spacerShrinks={[(formatFIx ? 1.5:1.6),1.7,1.6]}
                    nthBool={nummm}
               />

               <ParaButtonStyled
                    para={<>
                              <p><Df>g</Df><b>Fall & Winter</b><Df>G</Df></p>
                              <p>The fall season offers many options. Cool season annuals (mums and asters) can be planted for a flowering display that will last until early November. The large variety of pumpkins and gourds can be used to create autumn displays for the fall season. Now is also the time to plant spring flowering bulbs.</p>
                              <p>For a festive look, evergreen boughs, pine cones and branches can be used to decorate pots and flower boxes through the cold snowy months.
                              </p>
                         </>
                    }

                    buttons={
                              <>
                                   <img src={Placeholder}></img>
                              </>
                         }
                    spacerShrinks={[1.6,1.7,1.6]}
                    nthBool={true}
               />

               <Carousel/>

               <RainGardenHold>
                    <RainGarden
                         para={<>
                                   <p><Df>r</Df><b>Rain Gardens</b><Df>r</Df></p>
                                   <p>
                                        Rain gardens and dry river beds can be the solution to drainage issues.  Decorative but functional dry river beds divert water away from a problem area whereas a well placed and properly designed rain garden will collect runoff and slowly let it seep back into your soil. Contact us and we can help you determine the best solution to your drainage challenges.
                                   </p>
                              </>
                         }
                         buttons={
                              <>
                                   <img src={Placeholder}></img>
                              </>
                         }
                         spacerShrinks={[1.4,1.6,1.4]}
                         nthBool={false}
                    />
               </RainGardenHold>

          </>
     );
}

export default Designandinstall;
