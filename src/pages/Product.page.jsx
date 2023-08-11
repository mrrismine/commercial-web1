import { AddCircleOutline, RemoveCircleOutlineSharp} from "@mui/icons-material"
import { Fragment } from "react"
import { styled } from "styled-components"

const Container = styled.div`
   height: 70vh;
   width: 100vw;
`
const Wrapper = styled.div`
   display: flex;
   padding: 50px;
`
const ImgContainer = styled.div`
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Image = styled.img`
   height: 70%;
`
const InfoContainer = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 0px 50px;
`
const Title = styled.h1`
   font-size: 35px;
`
const Desc = styled.span`
   margin: 20px 0px;
`
const Price = styled.span`
   display: flex;
   align-items: center;
   font-size: 40px;
`
const FilterContainer = styled.div`
   display:flex;
   width: 40%;
   padding: 30px 0px;
`
const Filter = styled.div`
   flex: 1;
   display: flex;
   margin-right: 10px;
   justify-content: center;
   align-items: center;
`
const FilterTitle = styled.div`
   margin-right: 10px;
`
const FilterColor = styled.div`
   width:20px;
   height: 20px;
   background-color: ${props=>props.color};
   border-radius: 50%;
   margin: 0px 5px;
   cursor: pointer;
`
const FilterSize = styled.select`
   margin: 0px 10px;
   border: 1px solid gray;
   padding: 5px;
   cursor: pointer;
`
const FilterSizeOption = styled.option`
   
`
const AddContainer = styled.div`
   display:flex;
`
const AmountContainer = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
`
const Remove = styled.div`
   margin-right: 20px;
`
const Amount = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 30%;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px;
`
const Add = styled.div`
   margin-left: 20px;
`
const Button = styled.button`
   background-color: white;
   margin: 0px 40px;
   padding: 15px;
   border: 2px solid teal;
   font-weight: 500;
   cursor: pointer;

   &:hover {
      background-color: #d2d2d2;
   }
`

const ProductPage = () => {
   return(
      <Fragment>
         <Container>
            <Wrapper>
               <ImgContainer>
                  <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
               </ImgContainer>
               <InfoContainer>
                  <Title> Shirt Life Is Good</Title>
                  <Desc>
                     Shirt have been used by Bob Marley at his first show. This Shirt become so popular when Bob Marley die.
                  </Desc>
                  <Price> $ 20 </Price>
                  <FilterContainer>
                     <Filter>
                        <FilterTitle>COLOR</FilterTitle>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="darkblue"></FilterColor>
                        <FilterColor color="gray"></FilterColor>
                     </Filter>
                     <Filter>
                        <FilterTitle>SIZE</FilterTitle>
                        <FilterSize>
                           <FilterSizeOption>XL</FilterSizeOption>
                           <FilterSizeOption>L</FilterSizeOption>
                           <FilterSizeOption>M</FilterSizeOption>
                           <FilterSizeOption>S</FilterSizeOption>
                           <FilterSizeOption>XS</FilterSizeOption>
                        </FilterSize>
                     </Filter>
                  </FilterContainer>
                  <AddContainer>
                     <AmountContainer>
                        <Remove>
                           <RemoveCircleOutlineSharp/>
                        </Remove>
                        <Amount> 1 </Amount>
                        <Add>
                           <AddCircleOutline/>
                        </Add>
                     </AmountContainer>
                     <Button> ADD TO CART</Button>
                  </AddContainer>
               </InfoContainer>
            </Wrapper>
         </Container>
      </Fragment>
   )
}

export default ProductPage