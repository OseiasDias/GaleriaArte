import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img23 from "../assets/img/quadro (23).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ23() {
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
            src={img23}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> A última Ceia</h3>
              <span> Leonardo da Vinci</span>
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
            A última Ceia
            <span className="ocultaSpan"> - Leonardo da Vinci</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7">
              <img
                src={img23}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-5">
              <p>
                <strong>A Última Ceia</strong> (em italiano:{" "}
                <strong>LUltima Cena</strong> e também{" "}
                <strong>Il Cenacolo</strong>) é um afresco de{" "}
                <strong>Leonardo da Vinci</strong> para a igreja de{" "}
                <strong>Santa Maria delle Grazie</strong> em{" "}
                <strong>Milão</strong>, Itália. O trabalho presume-se que tenha
                sido iniciado por volta de <strong>1495-96</strong> e foi
                encomendado como parte de um plano de reformas na igreja e em
                seus edifícios conventuais pelo patrono de Leonardo,{" "}
                <strong>Ludovico Sforza</strong>, duque de Milão. Representa o
                episódio bíblico da <strong>Última Ceia</strong> de{" "}
                <strong>Jesus</strong> com os <strong>Apóstolos</strong> antes
                de ser preso e crucificado. É um dos bens culturais mais
                conhecidos e estimados do mundo.
              </p>

              <p>
                O trabalho mantém-se no convento que o sucessor{" "}
                <strong>Ludovico Sforza</strong> destinou a local de sepultura
                de seus familiares. O tema da <strong>Última Ceia</strong> era
                tradicional em refeitórios monásticos, mas a interpretação de
                Leonardo deu um maior <strong>realismo</strong> e{" "}
                <strong>profundidade</strong> à cena representada e ao lugar.
              </p>

              <p>
                O afresco se destaca por sua{" "}
                <strong>composição dramática</strong> e pela representação das{" "}
                <strong>reações emocionais</strong> dos apóstolos ao anúncio da{" "}
                <strong>traição de Judas</strong>. Cada figura é cuidadosamente
                posicionada, refletindo as diferentes{" "}
                <strong>personalidades</strong> e{" "}
                <strong>estados emocionais</strong> dos apóstolos.
              </p>

              <p>
                Leonardo utilizou uma técnica inovadora, optando por{" "}
                <strong>têmpera e óleo</strong> sobre uma preparação de gesso,
                ao invés da técnica tradicional de afresco, o que contribuiu
                para a <strong>deterioração</strong> da obra ao longo do tempo.
              </p>

              <p>
                A obra é frequentemente estudada por suas{" "}
                <strong>mensagens subliminares</strong> e{" "}
                <strong>simbolismo</strong>. Por exemplo, a figura à direita de
                Jesus, que muitos acreditam ser <strong>Maria Madalena</strong>,
                tem gerado discussões sobre a{" "}
                <strong>identidade das figuras</strong> e suas{" "}
                <strong>representações</strong>.
              </p>

              <p>
                <strong>A Última Ceia</strong> é considerada uma das pinturas
                mais importantes da história da arte, não apenas pela sua{" "}
                <strong>técnica</strong> e <strong>composição</strong>, mas
                também pelo <strong>impacto cultural</strong> e{" "}
                <strong>religioso</strong> que continua a ter até hoje. A obra
                está localizada no refeitório do convento, onde pode ser
                visitada mediante <strong>agendamento prévio</strong>, devido à
                sua popularidade.
              </p>

              <p>
                A pintura sofreu diversas <strong>restaurações</strong> ao longo
                dos anos, sendo a mais recente em <strong>1999</strong>, quando{" "}
                <strong>técnicas científicas</strong> foram utilizadas para
                restaurar as <strong>cores originais</strong> e remover traços
                de verniz aplicados em tentativas anteriores de conservação.
              </p>

              <p>
                <strong>A Última Ceia</strong> não é apenas uma representação da{" "}
                <strong>ceia de Jesus</strong>, mas também uma reflexão sobre a{" "}
                <strong>condição humana</strong>, a <strong>traição</strong> e a{" "}
                <strong>redenção</strong>, temas que ressoam profundamente na
                cultura ocidental.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ23;
