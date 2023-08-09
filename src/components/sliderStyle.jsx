import { styled } from "styled-components"

export const Container = styled.div`
   display: flex;
   width: 100%;
   height: 100vh;
   background-color: #d25a5a;
   position: relative;
`
export const Arrow = styled.div`
   background-color: #fffbfb;
   height: 50px;
   width: 50px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top:0;
   bottom:0;
   margin: auto;
   left: ${props => props.directions === "Left" && "10px"};
   right: ${props => props.directions === "Right" && "10px"};
   cursor: pointer;
   opacity: 0.6;
`
export const Wrapper = styled.div`
`
export const ImgContainer = styled.div`
   
`
export const InfoContainer = styled.div`
   
`