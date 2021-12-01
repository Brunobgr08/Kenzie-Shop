import { Btn } from "./styles";

const NewButton = ({ children, btn, ...rest }) => {
  return (
    <>
      <Btn btn={btn} {...rest}>
        {children}
      </Btn>
    </>
  );
};

export default NewButton;
