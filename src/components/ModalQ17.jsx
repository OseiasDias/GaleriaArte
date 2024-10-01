import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img17 from "../assets/img/quadro (17).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ17() {
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
            src={img17}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> Noite Estrelada</h3>
              <span>Vincent van Gogh</span>
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
            Noite Estrelada
            <span className="ocultaSpan"> - Vincent van Gogh</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <img
                src={img17}
                alt="fotos da galleria 1"
                className="img-fluid d-block mx-auto"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <p>
                <strong>Noite Estrelada</strong> é uma pintura de{" "}
                <strong>Vincent van Gogh</strong> de <strong>1889</strong>. A
                obra retrata a vista da janela de um quarto do{" "}
                <strong>hospício de Saint-Rémy-de-Provence</strong>, pouco antes
                do nascer do sol, com a adição de um{" "}
                <strong>vilarejo idealizado</strong> pelo artista. A tela faz
                parte da coleção permanente do{" "}
                <strong>Museu de Arte Moderna</strong> de{" "}
                <strong>Nova Iorque</strong> desde <strong>1941</strong>. É
                considerada uma das mais famosas pinturas de Van Gogh e uma das
                mais icônicas da arte ocidental.
              </p>

              <p>
                A pintura é famosa por sua representação vibrante do{" "}
                <strong>céu noturno</strong>, onde <strong>estrelas</strong> e
                uma <strong>lua crescente</strong> brilham intensamente,
                cercadas por <strong>nuvens turbulentas</strong>. Os{" "}
                <strong>ciprestes</strong> que se erguem em direção ao céu são
                frequentemente interpretados como símbolos de{" "}
                <strong>morte</strong> e <strong>espiritualidade</strong>,
                adicionando uma camada de emoção à cena.
              </p>

              <p>
                Van Gogh pintou <strong>Noite Estrelada</strong> enquanto estava
                internado no hospício, e a obra reflete sua{" "}
                <strong>luta interna</strong> e sua busca por paz. Ele utilizou
                uma técnica de <strong>óleo sobre tela</strong> que combina{" "}
                <strong>pinceladas expressivas</strong> com uma{" "}
                <strong>paleta de cores vibrantes</strong>, criando uma sensação
                de <strong>movimento</strong> e <strong>energia</strong>.
              </p>

              <p>
                A obra é frequentemente vista como uma expressão do{" "}
                <strong>estado emocional</strong> de Van Gogh, capturando seu
                amor pela <strong>natureza</strong> e sua fascinação pela{" "}
                <strong>luz</strong>. Em cartas a seu irmão{" "}
                <strong>Theo</strong>, Van Gogh mencionou que a noite parece
                muitas vezes mais colorida do que o dia, o que se reflete na{" "}
                <strong>intensidade das cores</strong> utilizadas na pintura.
              </p>

              <p>
                <strong>Noite Estrelada</strong> também é considerada uma obra
                seminal do <strong>expressionismo</strong>, pois, embora
                represente uma <strong>paisagem real</strong>, a interpretação
                de Van Gogh a transforma em uma{" "}
                <strong>visão profundamente pessoal</strong> e{" "}
                <strong>emocional</strong>. A pintura desvia-se das
                representações realistas, permitindo que a{" "}
                <strong>imaginação</strong> e a <strong>emoção</strong> do
                artista se manifestem na tela.
              </p>

              <p>
                Desde sua criação, <strong>Noite Estrelada</strong> tem sido
                objeto de <strong>admiração</strong> e <strong>análise</strong>,
                influenciando gerações de artistas e se tornando um{" "}
                <strong>ícone cultural</strong>. A obra é um testemunho da
                habilidade de Van Gogh em expressar suas{" "}
                <strong>emoções</strong> e <strong>experiências</strong> através
                da arte, solidificando seu legado como um dos maiores mestres da
                pintura.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ17;
