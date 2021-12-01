import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px;
  margin: 10px;
  background-color: var(--white);
  border-radius: 2px;
  border-bottom: solid 1px var(--cultured);

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  figure {
    width: 30%;
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    height: 200px;
    align-items: center;
  }
`;

export const ContInfo = styled.div`
  width: 69%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContText = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  @media (min-width: 768px) {
    height: 50%;
    align-items: flex-start;
  }
`;

export const ContTextDiv = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 768px) {
    justify-content: flex-start;
    width: 60%;
  }
`;

export const ContBtn = styled.div`
  width: 100%;
  height: 30%;
  padding-left: 80%;

  @media (min-width: 768px) {
    padding-bottom: 30px;
    height: 50%;
  }

  @media (min-width: 1024px) {
    padding-left: 80%;
  }
`;

export const ProductTittle = styled.h3`
  width: 100%;

  text-align: left;
  font-size: 0.9rem;
  color: var(--black-olive);

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ProductDescription = styled.p`
  width: 100%;
  padding-right: 30px;
  text-align: justify;
  font-size: 0.6rem;
  color: var(--taupe-gray);

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ProductPrice = styled.p`
  width: 30%;
  padding-bottom: 20px;

  text-align: left;
  font-size: 0.85rem;
  color: var(--black-olive);

  @media (min-width: 768px) {
    width: 40%;
    padding-left: 5px;
    font-size: 1rem;
    padding-bottom: 0px;
  }

  @media (min-width: 1024px) {
    width: 40%;
    padding-left: 10px;
    font-size: 1.3rem;
    padding-bottom: 0px;
  }
`;
