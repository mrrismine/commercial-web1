import { Fragment } from "react"
import { styled } from "styled-components"

import { popularProducts } from "../data"
import ProductItem from "./product-item.component"

const Container = styled.div`
   display:flex;
   flex-wrap: wrap;
   padding: 20px;
   justify-content: space-between;
`

const Products = () => {
   return(
      <Fragment>
         <Container>
            {
               popularProducts.map((item) => 
                  (
                     <ProductItem item={item} key={item.id} />
                  )
               )
            }

         </Container>
      </Fragment>
   )
}

export default Products