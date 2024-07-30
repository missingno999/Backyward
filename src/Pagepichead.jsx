import styled from "styled-components";



const DaHead=styled.div`
     background-image:url(${(props)=>(props.backing)});
     ${(props)=>(!props.repeats && "background-repeat: no-repeat;")}
     font-size:30px;
     width:100%;
     height:20vh;
     min-height:3em;

     div{
          display:flex;
          justify-content:center;
          align-items:center;
          height:100%;
          width:100%;
          backdrop-filter:blur(10px);
          font-family:Courgette-Regular;
     }

`;
//Page pic head, expects a prop "backing" which points to an image
function Pagepichead({backing,children,repeating=true}){
     return(
          <>
          <div style={{height: "95px"}}></div>
          <DaHead backing={backing} repeats={repeating}>
               <div>{children}</div>
          </DaHead>
          </>
     )
}

export default Pagepichead;
