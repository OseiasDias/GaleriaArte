import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img9 from "../assets/img/quadro (9).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ9() {
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
            src={img9}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> Guernica</h3>
              <span>Pablo Picasso</span>
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
            Guernica
            <span className="ocultaSpan"> - Pablo Picasso</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <img src={img9} alt="fotos da galleria 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <p>
                Com <strong>349 cm de altura</strong> por{" "}
                <strong>776,5 cm de comprimento</strong>,{" "}
                <strong>Guernica</strong> é uma das obras mais famosas de{" "}
                <strong>Pablo Picasso</strong> (1881-1973), pintada a óleo em{" "}
                <strong>1937</strong>. A pintura é uma “declaração de guerra
                contra a guerra e um manifesto contra a violência”, refletindo a
                profunda indignação de Picasso diante dos horrores da guerra.
                Além de ser um ícone da <strong>Guerra Civil Espanhola</strong>,{" "}
                <strong>Guernica</strong> tornou-se um símbolo do{" "}
                <strong>antimilitarismo mundial</strong> e da luta pela
                liberdade do homem.
              </p>

              <p>
                A obra carrega uma mensagem de resistência contra o{" "}
                <strong>autoritarismo</strong> e a ascensão dos governos{" "}
                <strong>fascistas</strong> na Europa. Picasso estabelece um
                diálogo direto com o espectador ao representar o drama, a morte
                e a tragédia de forma visceral e impactante. A intensidade
                emocional da pintura é acentuada pelo uso de uma paleta de cores
                em tons de <strong>cinza</strong>, <strong>preto</strong> e{" "}
                <strong>branco</strong>, que contribui para a atmosfera sombria
                da obra.
              </p>

              <p>
                Ao mesmo tempo, Picasso representa as terríveis consequências da
                guerra sob a luz de uma <strong>lâmpada elétrica</strong>, que
                simboliza a modernidade e o progresso técnico. A lâmpada, que se
                destaca na composição, pode ser interpretada como um símbolo da
                iluminação que revela a brutalidade da guerra e a desumanização
                que a acompanha.
              </p>

              <p>
                A obra está atualmente no{" "}
                <strong>Museu Nacional Centro de Arte Reina Sofia</strong>, em{" "}
                <strong>Madrid</strong>, onde continua a ser uma das peças mais
                visitadas e discutidas da coleção. Desde sua criação,{" "}
                <strong>Guernica</strong> tem atraído uma série de
                interpretações e análises, sendo considerada uma das mais
                poderosas declarações artísticas contra a guerra na história da
                arte.
              </p>

              <p>
                A pintura foi inspirada pelo bombardeio da cidade de{" "}
                <strong>Guernica</strong> em 26 de abril de 1937, por aviões
                alemães durante a Guerra Civil Espanhola. Picasso, que estava
                vivendo em Paris na época, ficou profundamente chocado ao ver as
                imagens da destruição e do sofrimento humano nas notícias. Essa
                tragédia não apenas motivou a criação da obra, mas também
                solidificou o papel de Picasso como um artista engajado
                politicamente.
              </p>

              <p>
                <strong>Guernica</strong> é composta por uma série de figuras
                dramáticas, incluindo um <strong>cavalo ferido</strong>, um{" "}
                <strong>touro</strong>, e várias figuras humanas em desespero,
                que se entrelaçam em uma composição caótica e poderosa. A
                representação do sofrimento humano e da destruição é palpável, e
                cada elemento da pintura contribui para a narrativa de dor e
                resistência. O uso de formas distorcidas e a disposição dinâmica
                das figuras são características marcantes do estilo de Picasso,
                que se afastou das representações realistas para explorar a
                expressão emocional.
              </p>

              <p>
                A obra não apenas documenta um evento histórico, mas também
                serve como um alerta atemporal sobre as consequências
                devastadoras da guerra.
                <strong>Guernica</strong> continua a ser um símbolo de protesto
                e um chamado à paz, ressoando com as lutas contemporâneas por
                justiça e liberdade. A pintura é um testemunho da capacidade da
                arte de transcender o tempo e o espaço, unindo pessoas em torno
                de uma mensagem comum de resistência contra a opressão.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ9;
