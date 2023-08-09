import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { styled } from "styled-components"

import Announcement from "./announcement.component";

import { Search, ShoppingBasket } from "@mui/icons-material";
import { MenuItem, Badge } from "@mui/material";

const Container = styled.div`
   height: 60px;
`

const Wrapper = styled.div`
   padding: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: row;
`
const Language = styled.div`
   font-size: 18px;
   display: flex;
   align-items: center;
`

const SearchContainer = styled.div`
   border: 1px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 10px;
   padding: 1px;
`

const Input = styled.input`
   border: none;
`

const Mid = styled.div`
   font-size: 30px;
   flex: 1;
   display: flex;
   justify-content: center;
`

const Logo = styled.div`
   font-weight: bolder;
`

const Right = styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;
`

const Navbar = () => {
   return(
      <Fragment>
         <Announcement/>
         <Container>
            <Wrapper>
               <Left>
                  <Language> EN </Language>
                  <SearchContainer>
                     <Input />
                     <Search style={{color:"gray", fontSize:16}}/>
                  </SearchContainer>
               </Left>

               <Mid>
                <Logo> LOGO. </Logo>
               </Mid>

               <Right>
                  <MenuItem>Register </MenuItem>
                  <MenuItem>Sign In </MenuItem>
                  <MenuItem>
                     <Badge badgeContent={null} color="primary">
                        <ShoppingBasket />
                     </Badge>
                  </MenuItem>
               </Right>
            </Wrapper>
         </Container>
         < Outlet />
      </Fragment>
   )
}

export default Navbar