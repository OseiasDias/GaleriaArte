import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img10 from "../assets/img/quadro (10).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ10() {
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
            src={img10}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> O baile no moulin de la Galette </h3>
              <span>Renoir</span>
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
            O baile no moulin de la Galette
            <span className="ocultaSpan"> - Renoir</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <img
                src={img10}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <p>
                <strong>O Baile no Moulin de la Galette</strong> (em francês:{" "}
                <strong>Le bal du moulin de la Galette</strong>) é uma pintura
                realizada a óleo sobre tela em <strong>1876</strong> pelo
                impressionista francês <strong>Pierre-Auguste Renoir</strong>.
                Esta obra é consagrada como um marco da pintura impressionista,
                capturando a essência da vida social parisiense da época. O
                quadro foi pintado em <strong>Paris</strong>, no bairro de{" "}
                <strong>Montmartre</strong>, um local vibrante e boêmio, famoso
                por seus cafés e salões de dança, onde a classe trabalhadora se
                reunia para dançar, beber e socializar.
              </p>

              <p>
                A pintura retrata uma cena animada no{" "}
                <strong>Moulin de la Galette</strong>, um popular salão de dança
                e café, onde Renoir captura a atmosfera festiva e alegre do
                local. O quadro é conhecido por sua representação vívida da vida
                urbana parisiense e por sua técnica impressionista,
                caracterizada por <strong>pinceladas soltas</strong> e o uso
                habilidoso da <strong>luz</strong> e <strong>cor</strong> para
                criar uma sensação de movimento e vida. A obra é frequentemente
                referida como uma das mais importantes do movimento
                impressionista e é considerada uma das mais belas pinturas do
                século XIX.
              </p>

              <p>
                Renoir não apenas retratou a vivacidade da cena, mas também
                incluiu amigos e conhecidos como modelos, criando uma conexão
                pessoal com a obra. Entre os personagens, podemos identificar
                figuras como <strong>Frank Lamy</strong> e{" "}
                <strong>Norbert Goeneutte</strong>, que aparecem sentados à
                mesa, enquanto outros dançam e se divertem ao ar livre. Esta
                inclusão de amigos e a representação de um cotidiano alegre
                refletem o espírito da <strong>belle époque</strong>, um período
                de grande efervescência cultural e social em Paris.
              </p>

              <p>
                A composição da obra é marcada por um{" "}
                <strong>jogo de luz e sombra</strong>, que é uma característica
                distintiva do estilo impressionista. A luz do sol filtra-se
                através das copas das árvores, criando um efeito de{" "}
                <strong>pontos de luz</strong> que dançam sobre as figuras e o
                ambiente. Renoir utiliza uma paleta de cores vibrantes,
                predominando os <strong>tons quentes</strong> de amarelo,
                laranja e verde, que conferem à cena uma sensação de alegria e
                descontração.
              </p>

              <p>
                O quadro foi exibido pela primeira vez no <strong>Salon</strong>{" "}
                em 1877, na exposição dos impressionistas, onde recebeu
                aclamação e críticas mistas. A obra foi adquirida por{" "}
                <strong>Gustave Caillebotte</strong>, um amigo e colecionador de
                arte, que a deixou ao estado francês após sua morte. Desde
                então, <strong>O Baile no Moulin de la Galette</strong>{" "}
                tornou-se uma das peças centrais do{" "}
                <strong>Museu de Orsay</strong>, em Paris, onde continua a
                atrair visitantes de todo o mundo.
              </p>

              <p>
                A cena retratada por Renoir é um testemunho da vida cotidiana da
                classe trabalhadora parisiense, que se reunia para desfrutar de
                momentos de lazer e alegria. O Moulin de la Galette,
                originalmente um moinho de vento, tornou-se um espaço de
                encontro popular, onde as pessoas podiam dançar e socializar em
                um ambiente descontraído. A obra captura perfeitamente a
                essência da vida parisiense do século XIX, celebrando os
                prazeres simples e a camaradagem entre amigos.
              </p>

              <p>
                O impacto cultural de{" "}
                <strong>O Baile no Moulin de la Galette</strong> é inegável, e a
                obra continua a ser uma fonte de inspiração para artistas e
                amantes da arte. A representação da alegria e da liberdade,
                combinada com a habilidade técnica de Renoir, solidificou seu
                lugar como um dos mestres do impressionismo. A pintura é um
                convite para o espectador se perder na cena e reviver a
                vivacidade e a energia de uma tarde de domingo em Paris,
                tornando-se um ícone atemporal da arte.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ10;
