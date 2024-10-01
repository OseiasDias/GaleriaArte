import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img20 from "../assets/img/quadro (20).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ20() {
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
              src={img20}
              alt="fotos da galleria 1"
              className="img-fluid my-2 h-100 "
            />
            <figcaption className="galleria-figcaption">
              <div className="textos-figcaption">
                <h3> A Criação de Adão </h3>
                <span>Michelangelo Buonarotti</span>
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
          A Criação de Adão 
            <span className="ocultaSpan"> - Michelangelo Buonarotti</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7">
              <img src={img20} alt="fotos da galleria 1" className="img-fluid d-block mx-auto" />
            </div>
            <div className="col-12 col-md-12 col-lg-5">
              <p>
                <strong>Composição VIII</strong> é uma pintura a óleo sobre tela
                realizada pelo artista russo <strong>Wassily Kandinsky</strong>{" "}
                em <strong>1923</strong>. Esta obra é considerada uma das mais
                importantes do artista e uma referência na história da{" "}
                <strong>arte moderna</strong>. Em{" "}
                <strong>Composição VIII</strong>, Kandinsky inclui, pela
                primeira vez, na série “Composição”, o <strong>círculo</strong>{" "}
                como sinal de <strong>perfeição</strong> e conotação{" "}
                <strong>cósmica</strong>. A diferença acentuada entre{" "}
                <strong>Composição VII</strong>, que é caracterizada por
                sensações apocalípticas, e esta pintura, com seu{" "}
                <strong>ritmo geométrico</strong>, é notável.
              </p>

              <p>
                Este trabalho apresenta as influências{" "}
                <strong>avant-garde</strong> que Kandinsky absorveu enquanto
                esteve na Rússia, antes de retornar à Alemanha para lecionar na{" "}
                <strong>Universidade Bauhaus</strong>. As tendências geométricas
                do <strong>Suprematismo</strong> e do{" "}
                <strong>Construtivismo</strong> são evidentes em sua obra,
                refletindo a evolução de seu estilo e suas experiências
                artísticas. A composição é uma síntese de formas e cores que se
                interagem em um espaço dinâmico e vibrante, mostrando a
                habilidade de Kandinsky em mesclar teoria e prática.
              </p>

              <p>
                O vocabulário geométrico da pintura inclui elementos como{" "}
                <strong>círculos</strong>, <strong>semicírculos</strong>,{" "}
                <strong>ângulos</strong> e <strong>linhas</strong> retas ou
                curvas. O círculo dominante, disposto no topo à esquerda, é
                rodeado por formas coloridas, enquanto um padrão de{" "}
                <strong>grid</strong> se aproxima dos círculos, criando um
                conjunto de elementos que distingue esta obra de quadros
                anteriores de Kandinsky. A forma e seus contrastes tornam-se o
                novo elemento central da composição, destacando-se mais do que a
                cor em si.
              </p>

              <p>
                Em <strong>Composição VIII</strong>, a profundidade e o espaço
                são definidos por camadas de cor no plano de fundo:{" "}
                <strong>azul claro</strong> na parte inferior,{" "}
                <strong>branco</strong> no meio e <strong>amarelo</strong> na
                parte superior. O surgimento do círculo neste trabalho de
                Kandinsky é significativo e se tornaria um elemento recorrente
                em suas obras futuras. O artista afirmou que o círculo é a
                síntese das grandes oposições, combinando o{" "}
                <strong>concêntrico</strong> e o <strong>excêntrico</strong> em
                uma única forma equilibrada.
              </p>

              <p>
                Atualmente, <strong>Composição VIII</strong> está em exibição no{" "}
                <strong>Museu Solomon R. Guggenheim</strong>, em{" "}
                <strong>Nova York</strong>, onde continua a ser uma peça central
                na coleção de arte moderna. A obra é um exemplo claro da busca
                de Kandinsky por um <strong>idioma abstrato</strong> que provoca
                emoções intensas no espectador, semelhante à música. Através de
                suas formas e cores, Kandinsky procurou criar uma harmonia
                universal nas artes visuais, solidificando seu legado como um
                dos pioneiros da arte abstrata.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ20;
