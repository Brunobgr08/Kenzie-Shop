import { useSelector } from "react-redux";

import { Grid, HeaderGrid } from "./styles";
import ProductInCart from "../ProductInCart";

const CartGrid = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <Grid>
      <HeaderGrid>
        <h4>Produto</h4>
        <h4>Preço</h4>
      </HeaderGrid>
      {cart.map((product, idx) => (
        <ProductInCart key={idx} product={product} />
      ))}
    </Grid>
  );
};

export default CartGrid;
