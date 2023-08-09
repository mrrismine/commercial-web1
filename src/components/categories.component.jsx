import CategoriesItem from "./categories-item.component"

import { categories } from "../data"
import { Fragment } from "react"
import { styled } from "styled-components"

const Container = styled.div`
   display: flex;
`

const Categories = () => {
   return(
      <Fragment>
         <Container>
         {
            categories.map((category) => {
               return(
                  <CategoriesItem category={category} key={category.id}/>
                  )
               })
         }
         </Container>
      </Fragment>
   )
}

export default Categories