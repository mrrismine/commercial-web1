import { Fragment } from "react"

import Slider from "../components/slider"
import Categories from "../components/categories.component"
import Products from "../components/Producst.component"

const HomePage = () => {
   return(
      <Fragment>
         <Slider />
         <Categories />
         <Products />
      </Fragment>
      
   )
}

export default HomePage