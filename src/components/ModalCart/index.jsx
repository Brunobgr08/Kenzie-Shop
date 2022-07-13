import Modal from "@mui/material/Modal";
import { IoCloseOutline } from "react-icons/io5";

import Button from "../Button";
import { ContainerEditWork, HeadCad, ContBtns, ContProd } from "./styles";

const ModalEditWork = ({ open, handle, idWork, token, reload, works }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => handle()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <ContainerEditWork>
          <HeadCad></HeadCad>
          <ContProd></ContProd>
          <ContBtns>
            <Button btn="gray">Ir para o carrinho</Button>
          </ContBtns>
        </ContainerEditWork>
      </Modal>
    </div>
  );
};

export default ModalEditWork;
