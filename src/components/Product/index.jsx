import { ProductContainer, ProductTittle } from "./styles";
import { ProductDescription, ProductPrice, ContBtnPro } from "./styles";
import Button from "../Button";
import { addProductThunk } from "../../store/modules/cart/thunks";

import { useDispatch } from "react-redux";

const ProductCart = ({ product: { id, name, price, image, description } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProductThunk({ id, name, price, image, description }));
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
      <ProductTittle>{name}</ProductTittle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>{`${priceFormat}`}</ProductPrice>
      <ContBtnPro>
        <Button btn="blue" fontSize={"90%"} onClick={handleClick}>
          Adicionar ao carrinho
        </Button>
      </ContBtnPro>
    </ProductContainer>
  );
};

export default ProductCart;
