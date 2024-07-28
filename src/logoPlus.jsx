import logo from "./assets/logo.webp";
import styled from "styled-components";

const Logoy=styled.img`
     align-self: ${(props)=>(props.align)};
     height: 100%;
     border-radius: 50%;
`;

function LogoPlus(props){
     return(
          <>
               <Logoy alt={"Backyard Havens"} src={logo} align={props.align}></Logoy>
          </>
     )
}

export default LogoPlus;
