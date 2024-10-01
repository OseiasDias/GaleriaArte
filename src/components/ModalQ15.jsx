import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img15 from "../assets/img/quadro (15).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ15() {
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
            src={img15}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> Olympia</h3>
              <span>Édouard Manet</span>
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
            Olympia
            <span className="ocultaSpan"> - Édouard Manet</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7">
              <img
                src={img15}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-5">
              <p>
                <strong>Olympia</strong> é uma pintura realista de{" "}
                <strong>Édouard Manet</strong>, datada de <strong>1863</strong>.
                A obra mede <strong>130,5 cm por 190 cm</strong> e está
                atualmente no <strong>Museu dOrsay</strong> em Paris. Ela foi
                selecionada para o <strong>Salon de Paris</strong> em{" "}
                <strong>1865</strong>, onde foi exibida e causou grande
                controvérsia.
              </p>

              <p>
                O quadro mostra uma mulher nua, conhecida como Olympia, deitada
                em uma cama, enquanto uma serva lhe traz flores. As modelos para
                a pintura foram <strong>Victorine Meurent</strong> e{" "}
                <strong>Laure</strong>. O olhar direto de{" "}
                <strong>Olympia</strong> causou choque e espanto quando a
                pintura foi exibida pela primeira vez, pois vários detalhes na
                obra a identificavam como uma <strong>prostituta</strong>. O
                governo francês adquiriu a pintura em <strong>1890</strong> após
                uma subscrição pública organizada por{" "}
                <strong>Claude Monet</strong>.
              </p>

              <p>
                A pintura não apenas representa a nudez, mas também desafia as
                convenções da época ao apresentar uma mulher que olha
                diretamente para o espectador, o que era incomum e provocativo.
                O olhar de <strong>Olympia</strong>, que é ao mesmo tempo{" "}
                <strong>desafiador</strong> e <strong>consciente</strong>,
                coloca o espectador na posição de um cliente, o que gerou
                reações negativas entre críticos e o público. Além disso, a
                inclusão de uma serva negra, que oferece flores, também foi um
                ponto de discórdia, refletindo as tensões raciais e sociais da
                época.
              </p>

              <p>
                A obra é frequentemente comparada à pintura de{" "}
                <strong>Titian</strong>, <strong>Venus of Urbino</strong> (
                <strong>1538</strong>), que idealiza a figura feminina.
                <strong>Manet</strong>, no entanto, apresenta uma mulher real,
                com uma postura que sugere tanto a disponibilidade quanto a
                independência. A presença do <strong>brinco de pérola</strong>,
                a <strong>orquídea</strong> em seu cabelo e a{" "}
                <strong>pulseira</strong> são símbolos de riqueza e
                sensualidade, enquanto o <strong>rabo de gato</strong> que
                aparece na pintura é interpretado como um símbolo de
                promiscuidade.
              </p>

              <p>
                <strong>Olympia</strong> desafiou as normas acadêmicas da arte,
                caracterizando-se por <strong>pinceladas rápidas</strong> e uma
                abordagem direta que elimina os tons intermediários. A
                iluminação é forte e direta, destacando a nudez da mulher de
                maneira crua e realista, o que contrasta com as representações
                idealizadas de mulheres na arte da época. A obra, portanto, não
                só representa uma figura feminina, mas também uma crítica ao
                modo como a sociedade via a nudez e a sexualidade.
              </p>

              <p>
                A recepção de <strong>Olympia</strong> foi extremamente negativa
                na época de sua exposição. Críticos a chamaram de imoral e
                vulgar, e a pintura provocou uma onda de indignação. O
                artista <strong>Émile Zola</strong> comentou sobre a honestidade
                de <strong>Manet</strong> em retratar a realidade da mulher
                contemporânea, em contraste com as idealizações da arte
                clássica.
                <strong>Manet</strong> se tornou um símbolo do modernismo, e sua
                obra desafiou as normas artísticas e sociais da época.
              </p>

              <p>
                Desde então, <strong>Olympia</strong> tornou-se uma das obras
                mais importantes da história da arte, influenciando gerações de
                artistas e desafiando as percepções sobre a nudez e a
                representação feminina. A pintura é um testemunho da capacidade
                de <strong>Manet</strong> de provocar reflexão e debate sobre
                temas sociais e culturais, solidificando seu lugar como um dos
                pioneiros do movimento moderno na arte.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ15;
