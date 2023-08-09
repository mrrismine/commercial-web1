import { styled } from "styled-components"

const Container = styled.div`
   height: 30px;
   color: white;
   font-weight: bolder;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: teal;
   font-size: 14px;
`

const Announcement = () => {
   return(
      <Container>
         Super Deal ! Free Shipping on Orders Over $50 !
      </Container>
   )
}

export default Announcement