import { Fragment } from "react"
import { styled } from "styled-components"

const Container = styled.div`
   position: relative;
   flex: 1;
   width: 100%;
   height: 70vh;
   margin: 10px;
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const Title = styled.h1`
   font-size: 40px;
   color: white;
`
const Info = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`
const Button = styled.button`
   border: none;
   padding: 15px;
   cursor: pointer;
   background-color: white;
   color: #747474;
   font-weight: 400;
`

const CategoriesItem = ({category}) => {
   const {img, title} = category
   return(
      <Fragment>
         <Container>
            <Image src={img}/>
            <Info> 
               <Title> {title} </Title>
               <Button>SHOP NOW</Button>
            </Info>
         </Container>
      </Fragment>
   )
}

export default CategoriesItem