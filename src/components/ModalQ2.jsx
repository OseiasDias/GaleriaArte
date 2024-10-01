import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img2 from "../assets/img/quadro (2).jpg";
import "../styles/quadros/quadro1.css";

function ModalQ2() {
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
        <figure className="galleria-figura h-100  my-2">
          <img
            src={img2}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3>American Gothic</h3>
              <span>Grant Wood</span>
            </div>
          </figcaption>
        </figure>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="fullscreen"
        aria-labelledby="contained-modal-title-vcenter"
        fullscreen
      >
        <Modal.Header closeButton className="minhaModal">
          <Modal.Title id="example-custom-modal-styling-title">
          American Gothic<span className="ocultaSpan"> - Grant Wood</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <img src={img2} alt="fotos da galleria 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <p>
                <strong>American Gothic</strong> é uma pintura de{" "}
                <strong>Grant Wood</strong>, datada de <strong>1930</strong>,
                que faz parte da coleção do{" "}
                <strong>Art Institute of Chicago</strong>. A inspiração de Wood
                veio de uma casa desenhada em estilo{" "}
                <strong>gótico rural</strong>, com uma distinta janela superior,
                que ele avistou na cidade de <strong>Eldon, Iowa</strong>. O
                artista decidiu pintar a casa junto com “o tipo de pessoas que
                eu imaginava viver naquela casa”, resultando em uma
                representação icônica da vida rural americana.
              </p>

              <p>
                A pintura mostra um <strong>fazendeiro</strong> ao lado de sua{" "}
                <strong>filha solteirona</strong>, frequentemente confundida com
                sua esposa. A mulher está vestida com um{" "}
                <strong>aventais em estilo colonial americano</strong>, enquanto
                o homem segura uma <strong>forquilha</strong>, que se tornou um
                símbolo da obra. A postura rígida dos personagens e a expressão
                em seus rostos evocam uma sensação de seriedade e determinação,
                refletindo os valores da sociedade rural da época.
              </p>

              <p>
                A obra é uma das mais famosas da história da arte americana e é
                frequentemente interpretada como uma crítica à vida rural,
                embora Wood tenha afirmado que sua intenção era retratar uma
                imagem positiva dos valores rurais americanos. Com dimensões de{" "}
                <strong>78 cm por 65,3 cm</strong>, a pintura é um exemplo
                notável da técnica do <strong>pontilhismo</strong> e da atenção
                meticulosa de Wood aos detalhes. Atualmente,{" "}
                <strong>American Gothic</strong> continua a ser uma das peças
                mais visitadas no <strong>Art Institute of Chicago</strong>,
                onde atrai admiradores de todo o mundo.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ2;
