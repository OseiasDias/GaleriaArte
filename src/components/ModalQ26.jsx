import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img26 from "../assets/img/quadro (26).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ26() {
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
            src={img26}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> O Filho do Homem</h3>
              <span>René Magritte</span>
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
            O Filho do Homem
            <span className="ocultaSpan"> - René Magritte</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <img
                src={img26}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <p>
                <strong>O Grito</strong> (em norueguês: <strong>Skrik</strong>)
                é uma série de quatro pinturas do norueguês{" "}
                <strong>Edvard Munch</strong>, <strong>1893</strong>. A obra
                representa uma figura <strong>andrógina</strong> num momento de
                profunda <strong>angústia</strong> e{" "}
                <strong>desespero existencial</strong>. O plano de fundo é a
                doca de <strong>Oslofjord</strong> (em Oslo) ao{" "}
                <strong>pôr-do-Sol</strong>. <strong>O Grito</strong> é
                considerado uma das obras mais importantes do movimento{" "}
                <strong>expressionista</strong> e adquiriu um estatuto de{" "}
                <strong>ícone cultural</strong>, a par da{" "}
                <strong>Mona Lisa</strong> de Leonardo da Vinci.
              </p>

              <p>
                Em sua autobiografia, Munch conta que levou{" "}
                <strong>duas horas</strong> para pintar a maior parte da obra
                (do total de menos de <strong>cinco horas</strong>), enquanto
                esperava sua esposa voltar do teatro. Neste dia, o pintor se
                sentira <strong>cansado</strong> e com uma leve{" "}
                <strong>dor de cabeça</strong>, não indo ao teatro com sua
                esposa e amigos. Ao retornar do filme, Munch mostrou a obra a
                sua esposa, vendo em sua face a “contração inequívoca de espanto
                e admiração”.
              </p>

              <p>
                Ele, então, perguntou-lhe se ela achava que em{" "}
                <strong>três anos</strong> ela esqueceria aquela imagem, tendo
                como resposta que “ninguém poderia esquecê-la uma vez vista”.
                Mas muita gente quer saber o que essa imagem representa. “Toda a
                minha ambição no campo pictórico é{" "}
                <strong>
                  materializar as imagens da irracionalidade concreta
                </strong>{" "}
                com a mais imperialista fúria da precisão”. Esta frase de Munch
                resume a pintura em questão; os elementos irreais –{" "}
                <strong>relógios derretidos</strong> – misturam-se com imagens
                familiares aos olhos humanos, criando uma impressão de que eles
                realmente estão ali.
              </p>

              <p>
                Ao fundo, podemos observar um <strong>penhasco</strong> e o{" "}
                <strong>mar</strong> no horizonte. Essa paisagem é o retrato do
                local onde Munch vivia, na <strong>Catalunha</strong>. Neste
                quadro, ele preferiu retratá-las sem qualquer{" "}
                <strong>símbolo metafórico</strong>, limitando-se ao real.
              </p>

              <p>
                No canto esquerdo da tela, algumas <strong>formigas</strong>{" "}
                reúnem-se em cima de um dos relógios. Estes insetos são a única
                representação de vida na pintura, além da <strong>mosca</strong>{" "}
                sobre o relógio que se encontra próximo ao descrito
                anteriormente. O pintor surrealista não gostava de formigas e
                quando as colocava nas suas obras era com o objetivo de
                simbolizar a <strong>putrefação</strong>.
              </p>

              <p>
                <strong>A Persistência da Memória</strong> é uma visão subjetiva
                da <strong>temporalidade</strong> e das suas implicações, seja
                na obra de arte ou nas lembranças. É também uma homenagem ao{" "}
                <strong>tempo interior</strong> e <strong>inconsciente</strong>,
                que tem sua própria forma de ser contado e que foge à
                racionalidade.
              </p>

              <p>
                O inconsciente é matéria essencial para{" "}
                <strong>Salvador Dalí</strong> e sua atemporalidade está
                expressa na obra com o uso de{" "}
                <strong>relógios que derretem</strong> ao serem expostos à
                persistência da memória.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ26;
