import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  margin-top: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 80%;
  height: 400px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h4 {
    font-size: 2rem;
    color: var(--black-olive);
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
  }
`;
