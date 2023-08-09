import { Fragment } from "react"
import { styled } from "styled-components"

import {ShoppingCart, Search, FavoriteBorder} from '@mui/icons-material';

const Info = styled.div`
   opacity: 0;
   position: absolute;
   z-index: 3;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0, 0.2);
   transition: all 0.5s ease;
`
const Container = styled.div`
   position: relative;
   flex: 1;
   margin: 5px;
   min-width: 400px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #b8d8ff;
   opacity: 0.7;
   cursor: pointer;
   

   &:hover ${Info} {
      opacity: 1;
   }
`
const Circle = styled.div`
   width: 200px;
   height: 200px;
   background-color: #fff8f8;
   border-radius: 50%;
   position: absolute;   
`
const Image = styled.img`
   height: 75%;
   z-index: 2;
`
const Icon = styled.div`
   margin: 10px;
   width: 50px;
   height: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: white;
   border-radius: 50%;
   transition: all 1.5s ease;
   &:hover {
      background-color: #fef9f1;
      transform: scale(1.2)
   }
`

const ProductItem = ({item}) => {
   const {img} = item
   return(
      <Fragment>
         <Container>
            <Circle />
            <Image src={img}/>
            <Info>
               <Icon>
                  <ShoppingCart/>
               </Icon>
               <Icon>
                  <Search />
               </Icon>
               <Icon>
                  <FavoriteBorder />
               </Icon>
            </Info>
         </Container>
      </Fragment>
   )
}

export default ProductItem