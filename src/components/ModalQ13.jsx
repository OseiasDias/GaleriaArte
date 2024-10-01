import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img13 from "../assets/img/quadro (13).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ13() {
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
            src={img13}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> Mona Lisa </h3>
              <span> Leonardo da vinci</span>
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
            Mona Lisa
            <span className="ocultaSpan"> - Leonardo da vinci</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <img
                src={img13}
                alt="fotos da galleria 1"
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <p>
                <strong>Mona Lisa</strong> (em italiano:{" "}
                <strong>La Gioconda</strong>, em francês:{" "}
                <strong>La Joconde</strong>) é uma das pinturas mais notáveis e
                conhecidas de <strong>Leonardo da Vinci</strong>, datada de{" "}
                <strong>1503</strong>. A obra é frequentemente referida como “a{" "}
                <strong>Mona Lisa do Norte</strong>” ou “a{" "}
                <strong>Mona Lisa holandesa</strong>”. O quadro representa uma
                mulher com uma expressão introspectiva e um sorriso enigmático,
                que se tornou um dos aspectos mais fascinantes e discutidos da
                pintura.
              </p>

              <p>
                A técnica utilizada por da Vinci nesta obra é conhecida como{" "}
                <strong>sfumato</strong>, que se caracteriza pela suavização das
                transições entre cores e formas, criando um efeito de
                profundidade e realismo. O uso do <strong>sfumato</strong> é
                evidente no rosto da mulher, onde as sombras e as luzes se
                misturam de forma quase imperceptível, conferindo uma qualidade
                tridimensional à sua expressão. O quadro é um exemplo perfeito
                do domínio técnico de da Vinci e da sua capacidade de capturar a
                complexidade das emoções humanas.
              </p>

              <p>
                A pintura retrata uma mulher que, segundo a tradição, é{" "}
                <strong>Lisa del Giocondo</strong>, esposa de um comerciante
                florentino. O sorriso sutil da <strong>Mona Lisa</strong> é
                frequentemente descrito como sedutor, mas também conservador,
                refletindo os padrões de beleza da época. O fundo da obra
                apresenta uma paisagem imaginária, com montanhas e um rio, que
                se estende até o horizonte, criando uma sensação de profundidade
                e continuidade.
              </p>

              <p>
                <strong>Mona Lisa</strong> é provavelmente o retrato mais famoso
                na história da arte e, sem dúvida, uma das obras mais valiosas
                do mundo. Sua fama transcende o tempo, e poucos outros trabalhos
                de arte são tão controversos, questionados, valiosos, elogiados,
                comemorados ou reproduzidos. A pintura está atualmente exposta
                no <strong>Museu do Louvre</strong>, em Paris, onde atrai
                milhões de visitantes anualmente, todos ansiosos para ver de
                perto este ícone cultural.
              </p>

              <p>
                A história da <strong>Mona Lisa</strong> é marcada por eventos
                notáveis, incluindo seu roubo em <strong>1911</strong> por{" "}
                <strong>Vincenzo Peruggia</strong>, um ex-funcionário do Louvre.
                O roubo causou uma grande comoção e levou a uma cobertura
                midiática intensa, aumentando ainda mais a notoriedade da
                pintura. Peruggia acreditava que a obra deveria ser devolvida à
                Itália, mas foi recuperada dois anos depois e retornou ao
                Louvre, onde permanece até hoje.
              </p>

              <p>
                A pintura não apenas representa uma mulher, mas também encapsula
                a busca de <strong>Leonardo</strong> por um ideal de beleza e
                harmonia. A forma como a figura é posicionada em relação ao
                fundo e a maneira como a luz incide sobre ela refletem a
                profunda compreensão de da Vinci sobre a anatomia humana e a
                perspectiva. O uso de cores sutis e a atenção aos detalhes, como
                o delicado véu e o cabelo da modelo, demonstram a paciência e a
                habilidade do artista.
              </p>

              <p>
                <strong>Mona Lisa</strong> continua a ser uma fonte de
                inspiração e estudo para artistas, historiadores e amantes da
                arte em todo o mundo. Sua presença na cultura popular é
                inegável, aparecendo em paródias, filmes, músicas e obras de
                arte contemporâneas, solidificando seu status como um dos
                maiores ícones da arte ocidental. A obra transcende o tempo e o
                espaço, unindo pessoas em torno de uma apreciação comum pela
                beleza e pelo mistério que ela representa.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ13;
