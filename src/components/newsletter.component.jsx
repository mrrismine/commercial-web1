import { Send } from "@mui/icons-material"
import { Fragment } from "react"
import { styled } from "styled-components"

const Container = styled.div`
   height: 50vh;
   background-color: #f2f1f1;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin-bottom: 20px;
`
const Title = styled.h1`
   font-size: 70px;
   margin-bottom: 20px;
`
const Desc = styled.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;
`
const InputContainer = styled.div`
   display: flex;
   margin: 10px;
   width: 50%;
   height: 40px;
   background-color: #ffffff;
   justify-content: space-between;
   border: 1px solid lightgray;
`
const Input = styled.input`
   border: none;
   flex: 10;
   padding-left: 20px;
`
const Button = styled.button`
   flex: 1;
   border: none;
   background-color: teal;
   cursor: pointer;
   color: white;

`

const NewsLetter = () => {
   return(
      <Fragment>
         <Container>
            <Title>Newsletter</Title>
            <Desc>Get Timely Updates From Your Favorite Producst</Desc>
            <InputContainer>
               <Input placeholder="Your Email"/>
               <Button>
                  <Send />
               </Button>
            </InputContainer>
         </Container>
      </Fragment>
   )
}

export default NewsLetter