import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img5 from "../assets/img/quadro (5).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ5() {
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
            src={img5}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> Terraço do Café à Noite</h3>
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
            Terraço do Café à Noite
            <span className="ocultaSpan"> - Vincent van Gogh</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <img src={img5} alt="fotos da galleria 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <p>
                <strong>Terraço do Café à Noite</strong>, cujo nome completo é{" "}
                <strong>
                  O Terraço do Café na Place du Forum, Arles, à Noite
                </strong>
                , é uma obra do pintor holandês{" "}
                <strong>Vincent van Gogh</strong>. Pintada entre{" "}
                <strong>1888</strong> durante o tempo que o artista passou na
                cidade de <strong>Arles</strong>, no sul da França, esta obra é
                uma das mais icônicas do período pós-impressionista de Van Gogh.
                Durante essa época, o artista também concebeu outras obras
                famosas, como <strong>Noite Estrelada Sobre o Ródano</strong> e{" "}
                <strong>Quarto em Arles</strong>.
              </p>

              <p>
                Atualmente, o quadro está exposto no{" "}
                <strong>Museu Kröller-Müller</strong>, em{" "}
                <strong>Otterlo</strong>, na Holanda, onde continua a ser
                admirado por sua vibrante representação da vida noturna. Van
                Gogh se tornou obcecado em trazer cores vivas para seus quadros
                e se apaixonou pela <strong>noite estrelada</strong> da cidade.
                Ele expressou em uma de suas cartas: Quando sinto uma terrível
                necessidade de religião, saio à noite para pintar as estrelas,
                o que reflete sua busca por inspiração nas belezas noturnas.
              </p>

              <p>
                A obra retrata o <strong>Le Café Van Gogh</strong>, localizado
                na Place du Forum, e a inspiração para a pintura veio após Van
                Gogh ler um trecho do romance <strong>Bel Ami</strong> de{" "}
                <strong>Guy de Maupassant</strong>, que descreve um café à
                noite. O contraste entre os <strong>tons quentes</strong> de
                amarelo e laranja da iluminação a gás e o{" "}
                <strong>azul profundo</strong> do céu estrelado cria uma
                atmosfera mágica e envolvente.
              </p>

              <p>
                Van Gogh utilizou uma técnica de pinceladas vigorosas para
                desenhar as formas, e a perspectiva da obra é marcada por uma{" "}
                <strong>convergência de linhas</strong> que resulta em um
                alongamento do terraço do café. As figuras humanas são
                representadas de maneira simplificada, quase como{" "}
                <strong>vultos</strong>, mas a energia da vida noturna é
                palpável. O artista acreditava que a noite é bem mais viva e
                ricamente colorida que o dia, e essa filosofia é evidente na
                forma como ele capturou a cena.
              </p>

              <p>
                Em <strong>Terraço do Café à Noite</strong>, Van Gogh trabalha
                com uma combinação de <strong>azuis</strong>,{" "}
                <strong>amarelos</strong> e <strong>roxos</strong>, enriquecendo
                as sombras e áreas mais escuras com <strong>verdes</strong>. A
                luz amarela que emana do lampião de gás ilumina o terraço,
                enquanto o céu estrelado reflete a força interior do artista,
                criando uma conexão emocional com o espectador. A obra é um
                testemunho da habilidade de Van Gogh em traduzir emoções por
                meio da cor, solidificando seu legado como um dos mestres da
                pintura.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ5;
