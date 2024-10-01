import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img21 from "../assets/img/quadro (21).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ21() {
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
            src={img21}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> Cargador de Flores</h3>
              <span>Diego Rivera</span>
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
            Cargador de Flores
            <span className="ocultaSpan"> - Diego Rivera</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <img
                src={img21}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <p>
                Em <strong>1935</strong>, <strong>Diego Rivera</strong> criou
                magistralmente <strong>The Flower Carrier</strong> (conhecido em
                seu idioma original como <strong>Cargador de Flores</strong>).
                Como muitas das pinturas de Rivera,{" "}
                <strong>The Flower Carrier</strong> transmite simplicidade, mas
                exala muito <strong>simbolismo</strong> e{" "}
                <strong>significado</strong>. As{" "}
                <strong>cores vibrantes</strong> são esfregadas na{" "}
                <strong>masonita</strong>, um método mais comum de pintura em
                superfícies duras.
              </p>

              <p>
                A obra está no{" "}
                <strong>San Francisco Museum of Modern Art</strong>.
              </p>

              <p>
                A pintura exibe um homem camponês vestido com roupas brancas e
                um <strong>sombrero amarelo</strong>, lutando em quatro apoios
                com um <strong>basket</strong> de flores dramaticamente
                oversized, preso às costas por uma alça amarela. Uma mulher,
                provavelmente a esposa do camponês, está atrás dele tentando
                ajudar com o suporte do cesto enquanto ele tenta se levantar.
              </p>

              <p>
                Embora as flores no cesto sejam impressionantemente bonitas para
                o espectador, o homem não vê sua beleza, mas apenas seu valor,
                enquanto as carrega para o mercado para venda ou troca. As
                formas geométricas oferecem <strong>contrastes</strong> ousados
                e intensos, com cada figura, item e folhagem ilustrados para
                refletir o <strong>individualismo</strong>.
              </p>

              <p>
                A obra não é um mural, mas a exploração subjacente da{" "}
                <strong>cultura mexicana</strong> e de seu povo é uma parte
                significativa dela, como em muitos murais de Rivera. Rivera
                buscou retratar os <strong>mexicanos indígenas</strong> de forma
                simpática, capturando-os em suas vidas diárias, com toda a sua
                rotina e esforço.
              </p>

              <p>
                <strong>The Flower Carrier</strong> simboliza os estilos de vida
                da <strong>classe trabalhadora mexicana</strong> e as
                dificuldades inerentes à obtenção de salários, especificamente
                os vendedores de flores, que Rivera retratou em várias de suas
                pinturas.
              </p>

              <p>
                A pintura é um testemunho da capacidade de Rivera de comunicar a
                beleza da sociedade mexicana, destacando suas contribuições não
                reconhecidas e dando-lhes dignidade. A obra continua a atrair
                audiências com sua narrativa visual marcante e execução
                habilidosa.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ21;
