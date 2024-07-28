import {useState} from 'react';
import Pagepichead from "./Pagepichead.jsx";
import styled from "styled-components";

import Placeholder from "./assets/Placeholder.png";

import MainHeader from "./MainHeader.jsx";
import {ImageCarousel,FullScreenCarousel} from "./Image-carousel.jsx";

import {FullWidthParagraph,IntroPara} from "./GlobalComponents.jsx";

const imageList=[Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder];
const subList=["Grafted crabapple with overgrown water shoots from the root stock.","Grafted crabapple after water shoots have been removed.","This Sand Cherry needs to be re-sized and shaped.","Sand Cherry after pruning.","This Burning Bush has overgrown its space.","Burning Bush after pruning.","Overgrown and leggy willow.","Willow immediately after pruning.","Same willow approximately 6 weeks after pruning."];

function Carousel(){
     const [visi,setVisi]=useState({vis: false, in: 0})
     return(
     <>
          <ImageCarousel imageList={imageList} subtitleList={subList} Title="The power of pruning" toFull={setVisi}/>
          <FullScreenCarousel isVisi={visi.vis} imageList={imageList} subtitleList={subList} Title="The power of pruning" itemIndex={visi.in} fromFull={setVisi}/>
     </>
     )
}

const Fullllll=styled(FullWidthParagraph)`
     @media(max-width:769px){
          p{
               padding-left: 8%;
               padding-right: 8%;
          }
     }
`;


function Pruning(){
     return(
          <>
          <MainHeader/>
          <Pagepichead backing={Placeholder}>
               Pruning & Trimming
          </Pagepichead>
          <IntroPara>
               Learn the ins and out of pruning! :D
          </IntroPara>
          <Fullllll>
               <p>
               Structural pruning to maintain the health, functionality and shape of your trees and shrubs is one of our specialties here at Backyard Havens. We take care to make clean cuts, prune out any dead or misshapen branches and meticulously clean up afterwards. We can also trim your shrubs and trees into a more formal look, if desired.
               </p>
               <p>
               Shrubs that have become leggy, too dense, or have overgrown their space can usually be re-shaped or re-sized using proper pruning techniques. Many shrubs can be reduced in size by up to 66% with no ill effects. Likewise, many shrubs that are dying back or otherwise unsightly can be rejuvenated with pruning instead of being removed and replaced.
               </p>
               <p>
               Trees also benefit from proper pruning. Pruning can be used to improve the overall appearance of the tree and to remove crossing branches or ones touching buildings. Small ornamental trees may be pruned to reduce their size. Please note that we are not certified arborists. We do not have the equipment, expertise or insurance to remove or prune large trees above 25' in height. All of our tree pruning involves removing branches that can be reached from an 8' ladder using a pole pruner or saw.
               </p>
               <p>
               Check out the photo gallery below to see the dramatic changes that can result from properly pruning your plants. If you consider pruning and trimming your ornamental shrubs and trees a daunting task, contact us at Backyard Havens. It's what we do.
               </p>
          </Fullllll>
          <Carousel/>
          </>
     );
}

export default Pruning;
