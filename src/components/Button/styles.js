import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${(props) =>
    props.btn === "purple"
      ? `var(--lightpurple)`
      : props.btn === "blue"
      ? `var(--blue-pigment)`
      : `var(--cultured)`};
  color: ${(props) =>
    props.btn === "purple"
      ? `var(--purple)`
      : props.btn === "blue"
      ? `var(--cultured)`
      : `var(--taupe-gray)`};
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 0;
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  margin: 5px 0px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.btn === "purple"
        ? `var(--purple)`
        : props.btn === "blue"
        ? `var(--zaffre)`
        : `var(--black-olive)`};
    color: ${(props) =>
      props.btn === "purple"
        ? `var(--white)`
        : props.btn === "blue"
        ? `var(--white)`
        : `var(--white)`};
  }
`;
