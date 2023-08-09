import { Fragment } from "react"

import Slider from "../components/slider"
import Categories from "../components/categories.component"
import Products from "../components/Producst.component"
import NewsLetter from "../components/newsletter.component"
import Footer from "../components/footer.component"

const HomePage = () => {
   return(
      <Fragment>
         <Slider />
         <Categories />
         <Products />
         <NewsLetter />
         <Footer />
      </Fragment>
      
   )
}

export default HomePage