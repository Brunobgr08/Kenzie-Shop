import styled from "styled-components";

export const ContainerEditWork = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 400px;
  border-radius: 2px;
  border: none;

  padding: 5px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const HeadCad = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 22px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--lightgray);
  margin-top: 10px;

  h3 {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ContProd = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContBtns = styled.div`
  width: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

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

  button {
    background-color: var(--white);
    border: none;
    color: var(--gray);
    height: 30px;
    width: 30px;
    font-size: 22px;
    text-align: center;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--lightgray);
      border: 1px solid var(--gray);
    }
  }
`;
export const ProductTittle = styled.h3`
  width: 100%;

  text-align: left;
  font-size: 1.3rem;
  color: var(--black-olive);
`;

export const ProductPrice = styled.p`
  width: 100%;

  text-align: right;
  font-size: 1.2rem;
  color: var(--black-olive);
`;
