import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img19 from "../assets/img/quadro (19).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ19() {
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
              src={img19}
              alt="fotos da galleria 1"
              className="img-fluid my-2 h-100 "
            />
            <figcaption className="galleria-figcaption">
              <div className="textos-figcaption">
                <h3> O nascimento de Vênus</h3>
                <span>Sandro Botticelli</span>
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
          O nascimento de Vênus
            <span className="ocultaSpan"> - Sandro Botticelli</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7">
              <img src={img19} alt="fotos da galleria 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-12 col-lg-5">
  <p>
    <strong>O Nascimento de Vênus</strong> é uma pintura de <strong>Sandro Botticelli</strong>, encomendada por <strong>Lorenzo di Pierfrancesco de Médici</strong> para a <strong>Villa Medicea di Castello</strong>. 
    A obra está exposta na <strong>Galleria degli Uffizi</strong>, em <strong>Florença</strong>, na Itália. Consiste de <strong>têmpera sobre tela</strong> e mede <strong>172,5 cm de altura por 278,5 cm de largura</strong>.
  </p>

  <p>
    A pintura representa a deusa <strong>Vênus</strong> emergindo do mar, já mulher adulta, conforme descrito na <strong>mitologia romana</strong>. 
    É provável que a obra tenha sido feita em <strong>1485</strong>, sob encomenda para <strong>Lorenzo di Pierfrancesco de Médici</strong>, que a teria pedido para enfeitar sua residência, a <strong>Villa Medicea di Castello</strong>. 
    Alguns estudiosos sugerem que a <strong>Vênus</strong> pintada para Pierfrancesco, e mencionada por <strong>Giorgio Vasari</strong>, teria sido outra que não a obra exposta em Florença e estaria perdida até o momento.
  </p>

  <p>
    A obra é um ícone do <strong>Renascimento</strong> e é frequentemente analisada por sua representação da <strong>beleza idealizada</strong> e do <strong>simbolismo</strong> associado à deusa do amor. 
    A figura de <strong>Vênus</strong>, que aparece nua sobre uma concha, é cercada por outras figuras mitológicas, incluindo <strong>Zéfiro</strong>, o deus do vento, e <strong>Flora</strong>, a deusa das flores.
  </p>

  <p>
    A composição da pintura é notável por seu uso de <strong>cores suaves</strong> e <strong>detalhes delicados</strong>, que criam uma atmosfera de sonho e idealização. 
    A maneira como <strong>Botticelli</strong> captura a <strong>luz</strong> e a <strong>textura</strong> do cabelo e da pele de <strong>Vênus</strong> é um testemunho de sua habilidade técnica e estética.
  </p>

  <p>
    A obra também é vista como uma representação do conceito <strong>neoplatônico de beleza</strong>, onde a beleza física é um reflexo da beleza espiritual. 
    O uso de elementos naturais, como as <strong>flores</strong> e o <strong>mar</strong>, simboliza a <strong>fertilidade</strong> e a <strong>renovação</strong>, temas centrais na mitologia associada a <strong>Vênus</strong>.
  </p>

  <p>
    <strong>O Nascimento de Vênus</strong> é uma das pinturas mais reproduzidas e admiradas do mundo, influenciando <strong>artistas</strong> e <strong>movimentos artísticos</strong> ao longo dos séculos. 
    Sua combinação de <strong>mitologia</strong>, <strong>beleza</strong> e <strong>técnica refinada</strong> solidificou seu lugar como uma das obras-primas do <strong>Renascimento italiano</strong>.
  </p>

  <p>
    Atualmente, a pintura não apenas representa um marco na história da arte, mas também continua a inspirar debates sobre a representação da <strong>mulher na arte</strong> e a <strong>interseção entre arte e mitologia</strong>. 
    A obra de <strong>Botticelli</strong> permanece um símbolo da busca pela <strong>beleza</strong> e pela <strong>expressão artística</strong> no contexto da cultura renascentista.
  </p>
</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ19;
