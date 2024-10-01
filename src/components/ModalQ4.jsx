import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img4 from "../assets/img/quadro (4).jpg";
import "../styles/quadros/quadro1.css";

function ModalQ4() {
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
            src={img4}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> Decapitação de João Batista</h3>
              <span>Caravaggio</span>
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
            Decapitação de João Batista
            <span className="ocultaSpan"> - Caravaggio</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <img src={img4} alt="fotos da galleria 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <p>
                <strong>A Decapitação de João Batista</strong> é uma pintura a
                óleo do renomado pintor italiano <strong>Caravaggio</strong>,
                realizada em <strong>1608</strong>. Esta obra é considerada uma
                das <strong>obras-primas</strong> do pintor e um marco na
                história da <strong>pintura ocidental</strong>, refletindo o
                estilo dramático e realista que Caravaggio é conhecido por ter
                desenvolvido.
              </p>

              <p>
                A pintura retrata a execução de <strong>João Batista</strong>,
                um tema frequentemente explorado na arte, mas a abordagem de
                Caravaggio se destaca pela intensidade emocional e pelo uso de{" "}
                <strong>luz e sombra</strong> (tenebrismo). Na cena, vemos{" "}
                <strong>Salomé</strong> segurando uma bandeja de ouro,
                preparando-se para receber a cabeça de João Batista, que está em
                um estado de brutalidade e realismo chocante. O olhar de Salomé
                é enigmático, refletindo tanto a satisfação quanto a repulsa
                pela ação que está prestes a ocorrer.
              </p>

              <p>
                Esta obra é notável por ser a única pintura que Caravaggio
                assinou, com sua assinatura colocada no sangue derramado da
                garganta de Batista. O uso do sangue como meio de assinatura é
                uma escolha ousada que simboliza a conexão do artista com o tema
                da obra e a gravidade da cena. Além disso, a composição
                apresenta um considerável espaço vazio, o que intensifica o foco
                nas figuras e na ação central, enquanto as grandes dimensões da
                tela fazem com que as figuras pareçam em tamanho quase natural,
                criando uma experiência imersiva para o espectador.
              </p>

              <p>
                A obra está atualmente na <strong>Igreja de São João</strong> em
                Malta, onde Caravaggio estava sob a proteção dos{" "}
                <strong>Cavaleiros de Malta</strong> durante o período em que a
                pintou. Este contexto histórico é importante, pois reflete a
                vida tumultuada de Caravaggio, marcada por conflitos pessoais e
                sua busca por redenção através da arte. A pintura não apenas
                captura um momento dramático da história religiosa, mas também
                serve como um testemunho da habilidade técnica de Caravaggio em
                transmitir emoções complexas e a condição humana.
              </p>

              <p>
                A Decapitação de João Batista continua a ser uma das obras mais
                estudadas e admiradas, influenciando gerações de artistas e
                desafiando os espectadores a confrontar a brutalidade e a beleza
                da vida e da morte. A técnica inovadora de Caravaggio e sua
                capacidade de capturar a essência do drama humano garantiram seu
                lugar como um dos mestres da pintura barroca, e esta obra em
                particular permanece como um poderoso exemplo de seu legado
                artístico.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ4;
