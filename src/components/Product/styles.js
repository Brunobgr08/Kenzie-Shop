import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 270px;
  height: 500px;
  padding: 15px;
  margin: 10px;
  background-color: var(--white);
  -webkit-box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.28);
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  figure {
    width: 100%;
    height: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    -webkit-box-shadow: 6px 6px 8px -1px rgba(0, 0, 0, 0.28);
    box-shadow: 6px 6px 8px -1px rgba(0, 0, 0, 0.28);
  }
`;
export const ProductTittle = styled.h3`
  width: 100%;

  text-align: left;
  font-size: 1.3rem;
  color: var(--black-olive);
`;
export const ProductDescription = styled.p`
  width: 100%;
  height: 90px;

  text-align: justify;
  font-size: 0.9rem;
  color: var(--taupe-gray);
`;
export const ProductPrice = styled.p`
  width: 100%;

  text-align: right;
  font-size: 1.2rem;
  color: var(--black-olive);
`;
