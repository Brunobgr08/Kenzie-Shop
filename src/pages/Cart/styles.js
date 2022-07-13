import styled from "styled-components";

export const ContainerBody = styled.div`
  /* width: 100vw;
  height: 100vh; */
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 10px;
  background-color: var(--cultured);
  border-bottom: solid 1px var(--taupe-gray);
  position: sticky;
  top: 0;
  z-index: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: var(--black-olive);
  }

  @media (min-width: 768px) {
    padding: 0 20px;

    h1 {
      margin-left: 20px;
    }
  }
`;

export const ContBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BtnHeader = styled.button`
  background-color: transparent;
  color: var(--taupe-gray);
  height: 60px;
  max-width: 452px;
  width: 50px;
  border: none;
  border-radius: 8px;
  padding: 0px 10px;
  font-weight: 500;
  margin: 0 5px;
  font-size: 1.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    display: none;
  }

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: var(--black-olive);
  }

  @media (min-width: 768px) {
    width: 150px;
    flex-direction: row;
    justify-content: space-evenly;

    p {
      display: block;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
