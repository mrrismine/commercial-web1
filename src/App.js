import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";

import HomePage from "./pages/home.page";
import Navbar from "./components/navbar.component";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Montserrat', sans-serif;
`

const App = () => {

  return (
    <Container>
      <Routes>
        <Route path="/" element={ <Navbar />} >
          <Route index element={ <HomePage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
