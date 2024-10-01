import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img22 from "../assets/img/quadro (22).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ22() {
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
        {" "}
        <figure className="galleria-figura h-100  my-2">
          <img
            src={img22}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> O beijo</h3>
              <span> Gustav Klimt</span>
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
            O beijo
            <span className="ocultaSpan"> - Gustav Klimt</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <img
                src={img22}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <p>
                <strong>O Beijo</strong> (original em alemão:{" "}
                <strong>Der Kuss</strong>) é um quadro do pintor austríaco{" "}
                <strong>Gustav Klimt</strong>. Executada em{" "}
                <strong>óleo sobre tela</strong>, medindo{" "}
                <strong>180×180 centímetros</strong>, entre{" "}
                <strong>1907 e 1908</strong>, é uma das obras mais conhecidas de
                Klimt, graças a um elevado número de reproduções.
              </p>

              <p>
                A obra pertence ao período designado de{" "}
                <strong>fase dourada</strong> da criação do autor e é
                representada por sinais característicos biológicos e
                psicológicos do sexo – as formas estão definidas por ornamentos
                retangulares (masculina) e arredondados (feminina).
              </p>

              <p>
                A ornamentação (auréola) que envolve o casal é definida pelo
                contorno masculino com as suas costas, qualificado como “tipo
                torre” ou “campanulado”, simbolizando a{" "}
                <strong>masculinidade</strong> no pescoço forte do homem que
                impõe o movimento. É ele que, no abraço, segura a cabeça da
                mulher e vira-a a fim de beijá-la. A mulher, ao contrário, é
                representada de forma passiva – ajoelhada em frente ao homem –
                num gesto claro de <strong>subordinação</strong>.
              </p>

              <p>
                A composição do quadro é <strong>antagônica</strong> e sugere
                mais de uma possibilidade de interpretação: por um lado evoca a
                felicidade da união erótica, por outro, questiona a identidade
                das duas pessoas e dos dois sexos. Para{" "}
                <strong>Gert Mattenklott</strong> (1942-2009), esse traço é
                recorrente nos desenhos de Klimt – “… mulheres em trajes longos,
                estreitos como cintas elásticas..”, escondem a “diferença
                feminina do corpo para simular o que lhes falta. Tornam-se
                símbolo daquilo que não têm: …um fetiche na câmara dos
                apetrechos dos prazeres.”.
              </p>

              <p>
                A obra está no:{" "}
                <strong>Österreichische Galerie Belvedere</strong>,{" "}
                <strong>Viena</strong>.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ22;
