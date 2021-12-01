import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: var(--white);
  -webkit-box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.28);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 55%;
    height: fit-content;
    margin: 0 30px;
    position: static;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  @media (min-width: 1024px) {
    margin: 0% 5%;
    width: 65%;
  }
`;

export const HeaderGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 2% 17%;
  position: sticky;
  top: 0;
  border-bottom: solid 1px var(--cultured);
  background-color: var(--white);

  h4 {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    position: static;
  }

  @media (min-width: 1500px) {
    padding-right: 23%;
  }
`;
