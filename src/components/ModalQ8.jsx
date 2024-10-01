import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img8 from "../assets/img/quadro (8).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ8() {
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
            src={img8}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3>Moça com o Brinco de Pérola</h3>
              <span>Johannes Vermeer</span>
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
            Moça com o Brinco de Pérola
            <span className="ocultaSpan"> - Johannes Vermeer</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <img src={img8} alt="fotos da galleria 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <p>
                <strong>Moça com o Brinco de Pérola</strong> (em holandês:{" "}
                <strong>Meisje met de parel</strong>) é uma pintura do artista
                holandês <strong>Johannes Vermeer</strong> de{" "}
                <strong>1665</strong>. Como o seu nome indica, a obra utiliza um{" "}
                <strong>brinco de pérola</strong> como ponto focal, que brilha
                intensamente e capta a atenção do espectador. A pintura está
                atualmente no <strong>Mauritshuis</strong>, em Haia, e é
                frequentemente referida como “a{" "}
                <strong>Mona Lisa do Norte</strong>” ou “a{" "}
                <strong>Mona Lisa holandesa</strong>”.
              </p>

              <p>
                Em geral, muito pouco se sabe sobre Vermeer e suas obras, o que
                contribui para o mistério que envolve sua arte. Esta pintura
                está assinada como “IVMeer”, mas não está datada, e não está
                claro se este trabalho foi encomendado, e em caso afirmativo,
                por quem. É provável que não se trate de um retrato
                convencional, mas sim de uma representação mais estilizada e
                idealizada.
              </p>

              <p>
                Recentemente, a literatura sobre Vermeer aponta para a imagem
                ser um <strong>“tronie”</strong>, uma descrição para o holandês
                do século XVII que se refere a uma <strong>“cabeça”</strong> que
                não era destinada a ser um retrato específico. Essa
                interpretação sugere que a moça pode ter sido uma figura
                imaginária, representando um tipo de personagem em vez de uma
                pessoa real. Este gênero de pintura era comum na arte da época e
                permitia aos artistas explorar expressões e emoções sem a
                necessidade de um modelo específico.
              </p>

              <p>
                Após a restauração mais recente da pintura em{" "}
                <strong>1994</strong>, o esquema de cores sutis e a intimidade
                da menina olhando para o espectador foram muito aprimorados. A
                técnica de Vermeer em capturar a luz e a textura da pele da
                jovem é admirável, e o uso do fundo escuro ajuda a destacar a
                figura central, conferindo profundidade à composição.
              </p>

              <p>
                O mistério sobre a identidade da modelo continua, e muitos
                estudiosos especulam sobre quem poderia ter sido a jovem. A pose
                da moça, que se volta para o espectador com um olhar intrigante,
                e a forma como ela é retratada, com a cabeça ligeiramente
                inclinada, criam uma conexão emocional com o público. A escolha
                do turbante e o brinco de pérola adicionam um elemento de
                exotismo à obra, refletindo a curiosidade de Vermeer sobre
                culturas diferentes.
              </p>

              <p>
                A obra não apenas destaca a habilidade técnica de Vermeer, mas
                também sua capacidade de transmitir uma sensação de mistério e
                encanto. A combinação de luz e sombra, juntamente com a paleta
                de cores cuidadosamente escolhida, contribui para a atmosfera
                única da pintura.
                <strong>Moça com o Brinco de Pérola</strong> é considerada uma
                das obras-primas da pintura ocidental e continua a fascinar e
                inspirar tanto o público quanto os críticos de arte em todo o
                mundo.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ8;
