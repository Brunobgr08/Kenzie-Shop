import styled from "styled-components";

export const ContainerResume = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  -webkit-box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.28);

  @media (min-width: 768px) {
    width: 35%;
    height: 400px;
  }

  @media (min-width: 1024px) {
    width: 22%;
    margin-right: 70px;
    position: fixed;
    right: 0;
  }
`;

export const HeaderResume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  border-bottom: solid 1px var(--cultured);

  h4 {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    height: 60px;
    padding: 30px 0px;
  }
`;

export const MainResume = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  padding: 10px 20px;

  h5 {
    font-size: 1rem;
    font-weight: 500;

    @media (min-width: 1440px) {
      font-size: 1.1rem;
      padding: 10px 10px;
    }
  }

  h6 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--black-olive);

    @media (min-width: 1440px) {
      font-size: 1.3rem;
      padding: 20px 20px;
    }
  }

  @media (min-width: 1440px) {
    padding: 20px 20px;
  }
`;

export const ContBtnResume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  padding: 10px 20px;

  @media (min-width: 768px) {
  }
`;
