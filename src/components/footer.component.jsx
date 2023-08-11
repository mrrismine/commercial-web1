import { Fragment } from "react"
import { styled } from "styled-components"

import PaymentIcon    from '../assets/payment.png'
import { Email, Facebook, Home, Instagram, Phone, Twitter } from "@mui/icons-material"



const Container = styled.div`
   display: flex;
`
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 90%;
   letter-spacing: 1px;
`
const SocialContainer = styled.div`
   margin: 20px 0px ;
   display: flex;
   flex-direction: row;
`
const SocialIcon = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: #${props => props.color};
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   margin-right: 20px;
`

const Center = styled.div`
   flex: 1;
   padding: 20px;
`
const Title = styled.h3`
   margin-bottom: 30px;
`
const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`
const ListItem = styled.li`
   margin-top: 10px;
   width: 50%;
`

const Right = styled.div`
   flex: 1;
   padding: 20px;
`
const ContactItem = styled.div`
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   letter-spacing: 1px;
`
const Payment = styled.img`
   background-color: white;
`

const Footer = () => {
   return(
      <Fragment>
         <Container>
            <Left>
               <Logo>LOGO.</Logo>
               <Desc>
                  There are many variatons of passage of Lorem Ipsum available, but
                  the majority have suffered alteration in some form, by injected
                  humour, or randomised words which dont look even slightly believable.
               </Desc>
               <SocialContainer>
                  <SocialIcon color="3B5999">
                     <Facebook />
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                     <Twitter />
                  </SocialIcon>
                  <SocialIcon color="E4405F"> 
                     <Instagram />
                  </SocialIcon>
               </SocialContainer>
            </Left>
            
            <Center>
               <Title> Useful Link </Title>
               <List>
                  <ListItem> Home </ListItem>
                  <ListItem> Cart </ListItem>
                  <ListItem> Man Fashion </ListItem>
                  <ListItem> Woman Fashion </ListItem>
                  <ListItem> Accessoris </ListItem>
                  <ListItem> My Account </ListItem>
                  <ListItem> Order Tracking </ListItem>
                  <ListItem> WishList</ListItem>
                  <ListItem> Wishlist</ListItem>
                  <ListItem> Terms</ListItem>
               </List>
            </Center>
            
            <Right>
               <Title>Contact</Title>
               <ContactItem>
                  <Home/> Path, lr, Kecamatan Dll. Indonesia
               </ContactItem>
               <ContactItem>
                  <Phone /> (+62) 82373122176
               </ContactItem>
               <ContactItem>
                  <Email/> emailmebroh@gmail.com
               </ContactItem>
               <Payment src={PaymentIcon} />
            </Right>
         </Container>
      </Fragment>
   )
}

export default Footer