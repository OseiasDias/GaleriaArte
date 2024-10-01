import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/quadros/quadro1.css";

function ModalInfo() {
  const [show, setShow] = useState(false);

  // Função para abrir o modal
  const handleShow = () => setShow(true);

  // Função para fechar o modal
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        onClick={handleShow}
        className="w-100 h-100 tiraBorda"
        variant="white"
      >
        <button className="btn btn-header ">Marcar Visita</button>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="minhaModal">
          <Modal.Title id="example-custom-modal-styling-title">
            Informação!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
                <h5 className="text-center">Serviço de Marcação de Visitas,Encotra-se Indisponivel no Momento!!!</h5>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalInfo;
