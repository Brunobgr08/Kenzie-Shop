import { ContainerBody, Header, Main } from "./styles";
import { ContBtn, BtnHeader } from "./styles";
import ProductsGrid from "../../components/ProductsList";

import { FaSignInAlt, FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Home = () => {
  const history = useHistory();

  const { cart } = useSelector((state) => state);

  const qtdProducts = cart.reduce((acc, item) => acc + 1, 0);

  return (
    <ContainerBody>
      <Header>
        <h1>Kenzie Shop</h1>
        <ContBtn>
          <BtnHeader onClick={() => history.push("/cart")}>
            <FaShoppingCart />
            <h5>{qtdProducts}</h5>
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
