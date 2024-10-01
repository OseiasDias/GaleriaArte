import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img3 from "../assets/img/quadro (3).jpg";
import "../styles/quadros/quadro1.css";

function ModalQ3() {
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
            src={img3}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3>Uma Tarde de Domingo na Ilha de Grande Jatte</h3>
              <span>Georges Seurat</span>
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
            Uma Tarde de Domingo na Ilha de Grande Jatte{" "}
            <span className="ocultaSpan">- Georges Seurat</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <img src={img3} alt="fotos da galleria 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <p>
                <strong>Uma Tarde de Domingo na Ilha de Grande Jatte</strong> é
                uma pintura a óleo do renomado pintor francês{" "}
                <strong>Georges-Pierre Seurat</strong>, que se destaca como uma
                das principais figuras do{" "}
                <strong>Movimento Impressionista</strong>. Criada entre{" "}
                <strong>1884 e 1886</strong>, esta obra é considerada a mais
                emblemática de Seurat, sendo um exemplo magistral da técnica do{" "}
                <strong>pontilhismo</strong>, que consiste em aplicar pequenos
                pontos de cor na tela para criar uma imagem coesa quando vista à
                distância.
              </p>

              <p>
                A pintura retrata a <strong>Ilha de Grande Jatte</strong>,
                localizada no <strong>rio Sena</strong>, e captura uma cena de
                lazer dominada por figuras humanas que representam diferentes{" "}
                <strong>classes sociais</strong>. Durante a época em que Seurat
                pintou a obra, a Grande Jatte era um popular destino de passeio
                para os parisienses, especialmente aos <strong>domingos</strong>
                , quando as pessoas se reuniam para relaxar e socializar. A
                composição da obra é rica em detalhes, apresentando{" "}
                <strong>48 pessoas</strong>, <strong>8 barcos</strong>,{" "}
                <strong>3 cães</strong>, um <strong>macaco</strong> e um{" "}
                <strong>cavalo puxando uma carroça</strong>, todos dispostos de
                maneira que refletem o cotidiano da{" "}
                <strong>burguesia parisiense</strong>.
              </p>

              <p>
                Com dimensões impressionantes de{" "}
                <strong>207,5 cm por 308 cm</strong>, Uma Tarde de Domingo na
                Ilha de Grande Jatte é uma das maiores obras de Seurat. A
                técnica do pontilhismo utilizada na pintura não só desafia as
                convenções artísticas da época, mas também introduz uma nova
                maneira de entender a <strong>cor</strong> e a{" "}
                <strong>luz</strong>. Seurat estudou meticulosamente a teoria
                das cores e aplicou-a em sua obra, criando uma fusão óptica que
                resulta em uma experiência visual única. A obra foi exibida pela
                primeira vez em <strong>1886</strong> no salão da{" "}
                <strong>Société des Artistes Indépendants</strong>, onde causou
                grande impacto e se tornou uma referência para muitos artistas
                posteriores.
              </p>

              <p>
                Atualmente, a pintura está em exibição no{" "}
                <strong>Art Institute of Chicago</strong>, onde continua a ser
                admirada por sua inovação técnica e pela maneira como captura a
                essência da vida parisiense no final do século{" "}
                <strong>XIX</strong>. O trabalho de Seurat teve um impacto
                duradouro na arte moderna, influenciando movimentos como o{" "}
                <strong>fauvismo</strong> e o <strong>cubismo</strong>. Sua
                abordagem científica da cor e da luz, juntamente com sua
                habilidade de criar imagens vibrantes a partir de pontos de cor,
                solidificou seu lugar como um dos artistas mais inovadores de
                sua época.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ3;
