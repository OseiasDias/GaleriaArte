import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img16 from "../assets/img/quadro (16).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ16() {
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
            src={img16}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> A escola de Atenas</h3>
              <span> Rafael</span>
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
            A escola de Atenas
            <span className="ocultaSpan"> - Rafael</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <img
                src={img16}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <p>
                <strong>A Escola de Atenas</strong> (em italiano:{" "}
                <strong>Scuola di Atene</strong>) é uma das mais famosas
                pinturas do renascentista italiano{" "}
                <strong>Rafael Sanzio</strong>. A obra representa a{" "}
                <strong>Academia de Atenas</strong> e foi pintada entre{" "}
                <strong>1509 e 1511</strong> na{" "}
                <strong>Stanza della Segnatura</strong>, sob encomenda do{" "}
                <strong>Vaticano</strong>. Esta pintura já foi descrita como “
                <strong>a obra-prima de Rafael</strong> e a{" "}
                <strong>
                  personificação perfeita do espírito clássico da Renascença
                </strong>
                ”.
              </p>

              <p>
                A importância da obra reside em demonstrar como a{" "}
                <strong>filosofia</strong> e a{" "}
                <strong>vida intelectual da Grécia Antiga</strong> foram vistas
                ao final do Renascimento. A pintura é um testemunho do
                renascimento do pensamento clássico e da busca pelo
                conhecimento, refletindo a vibração intelectual da época.
              </p>

              <p>
                <strong>A Escola de Atenas</strong> se encontra no{" "}
                <strong>Palácio Apostólico</strong>, no Vaticano, e ocupa uma
                das paredes da biblioteca do <strong>Papa Júlio II</strong>. O
                afresco é uma celebração do conhecimento, reunindo algumas das
                mentes mais brilhantes da história, incluindo{" "}
                <strong>Platão</strong>, <strong>Aristóteles</strong>,{" "}
                <strong>Sócrates</strong>, <strong>Pitágoras</strong> e{" "}
                <strong>Euclides</strong>.
              </p>

              <p>
                A composição da obra é organizada de maneira a criar um diálogo
                visual entre os filósofos, que estão dispostos em um grande
                cenário arquitetônico que lembra as estruturas da{" "}
                <strong>Grécia Antiga</strong>. No centro,{" "}
                <strong>Platão</strong> e <strong>Aristóteles</strong> são
                representados em uma conversa profunda, simbolizando as duas
                principais escolas de pensamento da época: o{" "}
                <strong>idealismo</strong> e o <strong>realismo</strong>.
              </p>

              <p>
                A pintura é notável por seu uso de <strong>perspectiva</strong>{" "}
                e <strong>iluminação</strong>, que conferem profundidade e
                realismo à cena. Rafael utilizou uma paleta de cores vibrantes e
                uma técnica de pinceladas suaves para criar uma sensação de
                harmonia e equilíbrio entre as figuras.
              </p>

              <p>
                Cada figura na pintura é meticulosamente representada, com
                características e poses distintas, contribuindo para a narrativa
                visual da obra. A presença de <strong>figuras femininas</strong>{" "}
                em tondos acima das cenas principais representa as várias formas
                de conhecimento, como <strong>Teologia</strong>,{" "}
                <strong>Poesia</strong> e <strong>Direito</strong>.
              </p>

              <p>
                <strong>A Escola de Atenas</strong> é considerada uma das obras
                mais importantes do Renascimento, simbolizando a recuperação dos
                valores clássicos e a busca por novas verdades. A obra reflete a
                crença renascentista no poder da razão e da educação, e a ideia
                de que o conhecimento é um bem coletivo que deve ser
                compartilhado.
              </p>

              <p>
                A influência de <strong>A Escola de Atenas</strong> se estende
                além de seu tempo, inspirando artistas e pensadores ao longo dos
                séculos. A obra continua a ser estudada e admirada, não apenas
                por sua beleza estética, mas também pelo seu profundo
                significado filosófico e cultural.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ16;
