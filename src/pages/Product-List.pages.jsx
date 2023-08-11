import { Fragment } from "react"
import Products from "../components/Producst.component"
import { styled } from "styled-components"

const Title = styled.h1`
   display: flex;
   justify-content: center;
`
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 20px;
`
const Filter = styled.div`
   
`
const FilterText = styled.span`

`
const Select = styled.select`
   margin-left: 20px;
   padding: 5px;
   border: 2px solid black;
   cursor: pointer;
`
const Option = styled.option`
`


const ProductList = () => {
   return(
      <Fragment>
         <Title>DRESSES</Title>
         <FilterContainer>
            <Filter>
               <FilterText> Filter Producst: </FilterText>
               <Select>
                  <Option disabled selected>COLOR</Option>
                  <Option>WHITE</Option>
                  <Option>WHITE</Option>
                  <Option>WHITE</Option>
                  <Option>WHITE</Option>
                  <Option>WHITE</Option>
               </Select>
               <Select>
                  <Option disabled selected>SIZE</Option>
                  <Option>XL</Option>
                  <Option>L</Option>
                  <Option>M</Option>
                  <Option>S</Option>
                  <Option>XS</Option>
               </Select>
            </Filter>
            <Filter>
               <FilterText> Sort Producst:</FilterText>
               <Select>
                  <Option disabled selected>SORT</Option>
                  <Option>Newest</Option>
                  <Option>High Price</Option>
                  <Option>Low Price</Option>
               </Select>
            </Filter>
         </FilterContainer>
         <Products />
      </Fragment>
   )
}

export default ProductList