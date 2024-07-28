
import{useState} from "react";

function JKJKl(){
     const[_1,__1]=useState(false);

     function down(e){
          __1(true);
     }
     function upp(e){
          __1(false);
     }

     const[_2,__2]=useState(false);

     function down2(e){
          __2(true);
     }
     function upp2(e){
          __2(false);
     }
//mouse down sets state, allows mouse move, mouse up exits state

     return(
          <div onMouseMove={()=>(_1 && console.log('fuck'))} onMouseDown={(e)=>{down(e),console.log("R")}} onMouseUp={(e)=>{upp(e)}}
          onTouchStart={(e)=>{down2(e)}} onTouchEnd={(e)=>{upp2(e)}} onTouchMove={()=>(_2 && console.log('NUUUUUUUUUUUUUUU >~<'))}>
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </div>
     )
}

export default JKJKl;
