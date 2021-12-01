import { ProductContainer, ProductTittle } from "./styles";
import { ProductDescription, ProductPrice } from "./styles";
import Button from "../Button";
import { addProductThunk } from "../../store/modules/cart/thunks";

import { useDispatch } from "react-redux";

const ProductCart = ({ product: { id, name, price, image, description } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProductThunk({ id, name, price, image, description }));
  };

  return (
    <ProductContainer>
      <figure>
        <img alt={name} src={image} />
      </figure>
      <ProductTittle>{name}</ProductTittle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>{`R$ ${price}`}</ProductPrice>
      <Button btn="blue" onClick={handleClick}>
        Adicionar ao carrinho
      </Button>
    </ProductContainer>
  );
};

export default ProductCart;
