import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img12 from "../assets/img/quadro (12).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ12() {
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
            src={img12}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> O Massacre dos Inocentes</h3>
              <span>Peter Paul Rubens</span>
            </div>
          </figcaption>
        </figure>{" "}
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
            O Massacre dos Inocentes
            <span className="ocultaSpan"> - Peter Paul Rubens</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto col-lg-6">
              <img
                src={img12}
                alt="fotos da galleria 1"
                className="img-fluid d-block mx-auto"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <p>
                <strong>Le Massacre des Innocents</strong>, em português{" "}
                <strong>O Massacre dos Inocentes</strong> ou{" "}
                <strong>O Massacre dos Santos Inocentes</strong>, é uma célebre
                e importante pintura a óleo sobre madeira do artista barroco{" "}
                <strong>Peter Paul Rubens</strong>, datada de{" "}
                <strong>1636-1638</strong>. Esta obra é um poderoso testemunho
                da habilidade de Rubens em capturar a emoção e a intensidade de
                cenas dramáticas, refletindo seu estilo característico e a
                influência do barroco europeu.
              </p>

              <p>
                Com ínfimos pormenores e detalhes, Rubens contemplou a maioria
                de suas pinturas, e esta em questão é um notável trabalho que
                compila um tema recorrente em sua carreira: a{" "}
                <strong>religião</strong>. Cenas bíblicas como esta foram
                retratadas com grande profundidade e criatividade, sem
                repetição, resultando em verdadeiras obras-primas que são ricas
                tanto em história quanto em significado.
                <strong>O Massacre dos Inocentes</strong> é uma dessas obras,
                abordando um episódio trágico do Novo Testamento em que o rei
                Herodes ordena a morte de todos os meninos recém-nascidos em
                Belém, na tentativa de eliminar o recém-nascido Jesus.
              </p>

              <p>
                A composição da pintura é marcada por um{" "}
                <strong>drama intenso</strong>, onde Rubens utiliza um jogo de
                luz e sombra para enfatizar a tragédia da cena. As figuras são
                representadas em posições contorcidas e expressões de desespero,
                transmitindo a dor e o sofrimento das mães que tentam proteger
                seus filhos. A obra é um exemplo perfeito do uso do{" "}
                <strong>chiaroscuro</strong>, uma técnica que cria um forte
                contraste entre luz e sombra, aumentando a dramaticidade da
                cena.
              </p>

              <p>
                A obra está atualmente na{" "}
                <strong>Galeria de Arte de Ontário</strong>, em Ontário, onde
                continua a ser uma das peças mais importantes da coleção. Desde
                sua criação, <strong>O Massacre dos Inocentes</strong> tem sido
                objeto de inúmeras análises e interpretações, sendo considerado
                um comentário sobre a violência e a opressão que permeiam a
                história da humanidade. Rubens, através de sua arte, convida o
                espectador a refletir sobre as consequências da guerra e da
                tirania.
              </p>

              <p>
                A pintura não só retrata um evento histórico, mas também serve
                como uma alegoria da luta contra a opressão e a injustiça. A
                forma como Rubens compõe a cena, com figuras humanas em
                movimento e expressões de desespero, cria uma conexão emocional
                profunda com o espectador. A obra é um apelo visual à empatia e
                à compaixão, destacando a fragilidade da vida diante da
                brutalidade.
              </p>

              <p>
                Rubens, que passou parte de sua vida na Itália, foi influenciado
                por mestres do barroco, como <strong>Caravaggio</strong>, e
                essas influências são evidentes na forma como ele aborda o tema
                da violência e do sofrimento. A riqueza de detalhes e a paleta
                vibrante de cores utilizadas por Rubens tornam a cena ainda mais
                impactante, capturando a atenção e a imaginação do espectador.
              </p>

              <p>
                <strong>O Massacre dos Inocentes</strong> permanece como uma
                obra poderosa e relevante, ressoando com as lutas contemporâneas
                contra a opressão e a injustiça. A pintura é um testemunho da
                capacidade da arte de abordar temas difíceis e provocar
                reflexão, solidificando o legado de Rubens como um dos grandes
                mestres da pintura barroca. A obra continua a inspirar e
                desafiar artistas e espectadores, servindo como um lembrete da
                importância da compaixão e da resistência contra a tirania.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ12;
