import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 85%;
    margin: 0 100px;

    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
`;
