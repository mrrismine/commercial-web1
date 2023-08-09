import { ArrowBack, ArrowForward } from "@mui/icons-material"
import { useState } from "react"
import { styled } from "styled-components"
// import { Container, Arrow, Wrapper, ImgContainer, InfoContainer } from "./sliderStyle"

import { sliderItems } from "../data"

export const Container = styled.div`
   display: flex;
   width: 100%;
   height: 100vh;
   position: relative;
   overflow: hidden;
`
export const Arrow = styled.div`
   background-color: white;
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
   z-index: 2;
`
export const Wrapper = styled.div`
   height: 100%;
   flex-direction: row;
   display: flex;
   transform: translateX(${props => props.slideindex * -100}vw);
   transition: all 1.5s ease-in-out;
`
export const Slide = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   background-color: #${props => props.bg};
`
export const ImgContainer = styled.div`
   flex: 1;
`
export const Image = styled.img`
   width: 80%;
`
export const InfoContainer = styled.div`
   flex: 1;
   padding: 30px;
`
export const Title = styled.h1`
   font-size: 60px;
`
export const Desc = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   letter-spacing: 3px;
   margin-right: 30px;
`
export const Button = styled.button`
   background-color: transparent;
   padding: 10px 15px;
   font-size: 20px;
   font-weight: lighter;
   cursor: pointer;
`

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0)
   const handleClick = (directions) => {
      if(directions === "left") {
         setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
      } else {
         setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
      }
   }
   return(
      <Container>
         <Arrow directions="Left" onClick={()=> handleClick("left")}>
            <ArrowBack />
         </Arrow>
         
         <Wrapper slideindex={slideIndex}>
            {
               sliderItems.map((items) => {
                  const {title, desc, img, id, bg} = items
                  return (
                  <Slide bg={bg} key={id}>
                     <ImgContainer>
                        <Image src={img}/>
                     </ImgContainer>
                     <InfoContainer>
                        <Title>{title}</Title>
                        <Desc>{desc}</Desc>
                        <Button>SHOW NOW</Button>
                     </InfoContainer>
                  </Slide>

                  )
               })
            }
            
         </Wrapper>
         <Arrow directions="Right" onClick={()=>handleClick("right")}>
            <ArrowForward/>
         </Arrow>

      </Container>
   )
}

export default Slider