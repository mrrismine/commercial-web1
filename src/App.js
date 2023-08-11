import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";

import HomePage from "./pages/home.page";
import Navbar from "./components/navbar.component";
import ProductList from "./pages/Product-List.pages";
import ProductPage from "./pages/Product.page";

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
          <Route path="category" element={< ProductList />} />
          <Route path="product" element={<ProductPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
