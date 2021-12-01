import { ProductContainer, ProductTittle } from "./styles";
import { ProductDescription, ProductPrice } from "./styles";
import { ContInfo, ContText, ContBtn, ContTextDiv } from "./styles";
import Button from "../Button";
import { remProductThunk } from "../../store/modules/cart/thunks";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { useDispatch } from "react-redux";

const ProductInCart = ({
  product: { id, name, price, image, description },
}) => {
  const newDescription = `${description.slice(0, 57)}...`;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(remProductThunk({ id, name, price, image, description }));
  };

  return (
    <ProductContainer>
      <figure>
        <img alt={name} src={image} />
      </figure>
      <ContInfo>
        <ContBtn>
          <Button btn="gray" onClick={handleClick}>
            <MdOutlineRemoveShoppingCart /> Remover do carrinho
          </Button>
        </ContBtn>
        <ContText>
          <ContTextDiv>
            <ProductTittle>{name}</ProductTittle>
            <ProductDescription>{newDescription}</ProductDescription>
          </ContTextDiv>
          <ProductPrice>{`R$ ${price}`}</ProductPrice>
        </ContText>
      </ContInfo>
    </ProductContainer>
  );
};

export default ProductInCart;
