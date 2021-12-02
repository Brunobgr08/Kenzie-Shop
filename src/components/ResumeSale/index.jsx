import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { remAllProductThunk } from "../../store/modules/cart/thunks";

import {
  ContainerResume,
  HeaderResume,
  MainResume,
  ContBtnResume,
} from "./styles";
import Button from "../Button";

const Resume = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  const qtdProducts = cart.reduce((acc, item) => acc + 1, 0);

  const prices = cart.reduce((acc, item) => acc + item.price, 0);

  const priceProducts = prices.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const handleClick = () => {
    dispatch(remAllProductThunk());
  };

  // const clearCart = () => {
  //   localStorage.removeItem("@KenzieShop:cart");
  // };

  //Preciso definir um state para load das informações  dos produtos
  //state ajudará a tornar a limpeza visual do cart

  return (
    <ContainerResume>
      <HeaderResume>
        <h4>Resumo do pedido</h4>
      </HeaderResume>
      <MainResume>
        <h5>{`${qtdProducts} Produtos`}</h5>
        <h6>{`${priceProducts}`}</h6>
      </MainResume>
      <ContBtnResume>
        <Button btn="gray" fontSize={"90%"} onClick={handleClick}>
          Limpar o carrinho
        </Button>
        <Button btn="blue" fontSize={"90%"}>
          FINALIZAR O PEDIDO
        </Button>
      </ContBtnResume>
    </ContainerResume>
  );
};

export default Resume;
