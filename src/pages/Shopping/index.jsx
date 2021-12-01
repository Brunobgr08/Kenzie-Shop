import { ContainerBody, Header, Main } from "./styles";
import { ContBtn, BtnHeader } from "./styles";
import ProductsGrid from "../../components/ProductsList";

import { FaSignInAlt, FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  return (
    <ContainerBody>
      <Header>
        <h1>Kenzie Shop</h1>
        <ContBtn>
          <BtnHeader onClick={() => history.push("/cart")}>
            <FaShoppingCart />
            <p>Carrinho</p>
          </BtnHeader>
          <BtnHeader onClick={() => history.push("/login")}>
            <FaSignInAlt />
            <p>Entrar</p>
          </BtnHeader>
        </ContBtn>
      </Header>
      <Main>
        <ProductsGrid />
      </Main>
    </ContainerBody>
  );
};

export default Home;
