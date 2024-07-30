import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

import num28 from "./assets/20028.webp";
import num15 from "./assets/0015.webp";
import num14 from "./assets/0014.webp";
import num13 from "./assets/0013.webp";

import Pagepichead from "./Pagepichead.jsx";
import MainHeader from "./MainHeader.jsx";

import {ParaButton,IntroPara} from "./GlobalComponents.jsx";

const ParaButtonStyled=styled(ParaButton)`
     @media(max-width:1245px){
          margin-bottom:10px;
     }
     @media (max-width:769px){
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
          align-items:center;
          justify-content:center;
          max-width: 40%;
          @media(max-width:1245px){
               max-width:50%;
          }
          @media(max-width:950px){
               max-width:60%;
          }
          @media(max-width:769px){
               align-items: center !important;
               max-width:100% !important;
               margin-left:5px;
               margin-right:5px;
               *{
                    text-align: center;
               }
          }
     }
     div#Butt{
          width:100%;
          justify-content:center;
          align-content:center;
     }
`;

function Mulching(){
     const nummm=useMediaQuery({query:'(max-width:769px)'});
     return(
          <>
               <MainHeader/>
               <Pagepichead backing={num28}>
                    Mulching
               </Pagepichead>
               <IntroPara>
                    Read about the ins and outs of our mulching services!
               </IntroPara>

               <ParaButtonStyled
                    para={<>
                              <p>
                              Organic mulches (shredded hardwood or cedar bark, dyed wood mulch, leaf compost and cocoa bean hulls) are beneficial to your planting beds for many reasons. These mulches discourage weed growth, help maintain soil temperature and moisture, add organic matter as they decompose and frankly, make the beds look nice.
                              </p>
                              <p>
                              Inorganic mulches (stone, rubber, etc.) also moderate the soil temperature and can help maintain moisture. However, since they do not decompose, no nutrients are added to the soil. The greatest benefit of these mulches are the wide variety of aesthetic options and the longevity they offer.
                              </p>
                         </>
                    }

                    buttons={
                              <>
                                   <img src={num15}></img>
                              </>
                         }
                    spacerShrinks={[1.4,1.6,1.4]}
                    nthBool={!nummm}
                    maxWidth={'769'}
               />
               <ParaButtonStyled
                    para={<>
                              <p>
                              Using weed barrier under a mulch layer is a hotly debated topic. The addition of a weed barrier fabric under an inorganic mulch is necessary to both inhibit weed growth as well as to keep the rocks from sinking into the soil.
                              </p>
                              <p>
                              We do not believe in the practice of placing weed barrier fabric under organic mulches. As stated earlier, organic mulches decompose and add organic matter to the soil. By installing weed barrier between the soil and the mulch, this compost layer instead builds up on top of the barrier and never reaches the soil. Over time, this practice results in more labor as weeds and volunteer trees & shrubs take root in the layers of compost sitting on top of the barrier. The picture to the right is an example of what happens.
                              </p>
                         </>
                    }

                    buttons={
                              <>
                                   <img src={num14}></img>
                              </>
                         }
                    spacerShrinks={[1.4,1.6,1.4]}
                    nthBool={false}
                    maxWidth={'769'}
               />
               <ParaButtonStyled
                    para={<>
                              <p>
                              When installing mulch, it is important to maintain a 3-4" depth while keeping the mulch from building up around plant crowns and trunks as this will promote rot. Once installed, the mulch should be 'top dressed' periodically to maintain that depth. The length of time between top dressings will depend on the type of mulch being used as well as environmental conditions. If the mulch builds up to excessive levels, it may be best to remove, till in or 'fluff' the existing mulch rather than top dressing it.
                              </p>
                              <p>
                              Proper mulching is an important aspect of maintaining your planting beds and is treated as such by us at Backyard Havens. We strive to keep the mulch smooth with a crisp edge along the bed edge, paved surfaces and building foundations. This may all sound a bit extreme but you will notice the difference in the health and appearance of your plant beds.
                              </p>
                         </>
                    }

                    buttons={
                              <>
                                   <img src={num13}></img>
                              </>
                         }
                    spacerShrinks={[1.4,1.6,1.4]}
                    nthBool={!nummm}
                    maxWidth={'769'}
               />
          </>
     );
}

export default Mulching;
