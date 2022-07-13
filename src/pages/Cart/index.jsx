import { ContainerBody, Header, Main } from "./styles";
import { ContBtn, BtnHeader } from "./styles";
import CartGrid from "../../components/CartList";
import Resume from "../../components/ResumeSale";

import { FaSignInAlt, FaShopify } from "react-icons/fa";
import { useHistory } from "react-router";

const Cart = () => {
  const history = useHistory();

  return (
    <ContainerBody>
      <Header>
        <h1>Kenzie Shop</h1>
        <ContBtn>
          <BtnHeader onClick={() => history.push("/")}>
            <FaShopify />
            <p>Produtos</p>
          </BtnHeader>
          <BtnHeader onClick={() => history.push("/login")}>
            <FaSignInAlt />
            <p>Entrar</p>
          </BtnHeader>
        </ContBtn>
      </Header>
      <Main>
        <CartGrid />
        <Resume />
      </Main>
    </ContainerBody>
  );
};

export default Cart;
