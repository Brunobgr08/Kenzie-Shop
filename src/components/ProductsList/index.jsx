import { useSelector } from "react-redux";

import { Grid } from "./styles";
import ProductCart from "../Product";

const ProductsGrid = () => {
  const { storage } = useSelector((state) => state);

  return (
    <Grid>
      {storage.map((product, idx) => (
        <ProductCart key={idx} product={product} />
      ))}
    </Grid>
  );
};

export default ProductsGrid;
