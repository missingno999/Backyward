import styled from "styled-components";




const Adosdo=styled.div`
     background-color:#f7f7f7;
     p{
          font-family:Gentium-Plus;
          padding-left:16%;
          padding-right:16%;
          text-align:center;
          font-size:20px;
     }
     b{
          font-family:Gentium-Plus;
          font-size:22px;
     }
     hr{
          height:3px;
          border-style:none;
          background-color:#ba9979;
          width:30%;
          border-radius:100%;
     }
`;

function IntroPara(props){
     return(
          <Adosdo className={props.className}>
               <hr></hr>
               <p>
                    <b>
                    {props.children}
                    </b>
               </p>
               <hr></hr>
          </Adosdo>
     );
}


const DaHead=styled.div`
     background-image:url(${(props)=>(props.backing)});
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
function Pagepichead(props){
     return(
          <>
          <div style={{height: "95px"}}></div>
          <DaHead backing={props.backing}>
               <div>{props.children}</div>
          </DaHead>
          </>
     )
}

export default Pagepichead;
export {IntroPara};
