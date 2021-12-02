import { ProductContainer, ProductTittle } from "./styles";
import { ProductDescription, ProductPrice } from "./styles";
import { ContInfo, ContText, ContBtn, ContTextDiv } from "./styles";
import Button from "../Button";
import { remProductThunk } from "../../store/modules/cart/thunks";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { useDispatch } from "react-redux";
import MediaQuery from "react-responsive";

const ProductInCart = ({
  product: { id, name, price, image, description, idCart },
}) => {
  const newDescription = `${description.slice(0, 57)}...`;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(remProductThunk({ id, name, price, image, description, idCart }));
  };

  const priceFormat = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <ProductContainer>
      <figure>
        <img alt={name} src={image} />
      </figure>
      <ContInfo>
        <ContBtn>
          <MediaQuery maxWidth={1439}>
            <Button btn="gray" fontSize={"1rem"} onClick={handleClick}>
              <MdOutlineRemoveShoppingCart />
            </Button>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <Button btn="gray" fontSize={"90%"} onClick={handleClick}>
              <MdOutlineRemoveShoppingCart /> Remover do carrinho
            </Button>
          </MediaQuery>
        </ContBtn>
        <ContText>
          <ContTextDiv>
            <ProductTittle>{name}</ProductTittle>
            <ProductDescription>{newDescription}</ProductDescription>
          </ContTextDiv>
          <ProductPrice>{`${priceFormat}`}</ProductPrice>
        </ContText>
      </ContInfo>
    </ProductContainer>
  );
};

export default ProductInCart;
