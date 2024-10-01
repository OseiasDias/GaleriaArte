import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img27 from "../assets/img/quadro (27).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ27() {
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
            src={img27}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> Os fuzilamentos de três de Maio</h3>
              <span> Goya</span>
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
            Os fuzilamentos de três de Maio
            <span className="ocultaSpan"> - Goya</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7">
              <img
                src={img27}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-5">
              <p>
                <strong>Três de Maio de 1808 em Madrid</strong>, também
                conhecido como{" "}
                <strong>Os fuzilamentos da montanha do Príncipe Pío</strong> ou{" "}
                <strong>Os fuzilamentos de três de Maio</strong>, é um quadro do
                pintor espanhol <strong>Francisco de Goya</strong>. O quadro, de{" "}
                <strong>2,68 x 3,47 metros</strong>, foi realizado em{" "}
                <strong>1814</strong> e encontra-se no{" "}
                <strong>Museu do Prado</strong>, em <strong>Madrid</strong>.
              </p>

              <p>
                O quadro forma uma série com o quadro{" "}
                <strong>O Três de Maio</strong>. Após sua exibição ao ar livre
                por ocasião do retorno de <strong>Fernando VII</strong>, foram
                armazenados por longo tempo, e sabemos que por volta de{" "}
                <strong>1850</strong> se guardavam no Museu do Prado, mas não se
                exibiam, talvez pelas críticas dispares que tiveram durante
                longo do tempo. O pintor <strong>José Madrazo</strong>, diretor
                do museu do Prado, chegara a afirmar que estas eram obras de
                discutível execução, muito inferiores aos retratos mais famosos
                do artista. Finalmente, foi com o auge do{" "}
                <strong>Romantismo</strong> e o <strong>Impressionismo</strong>{" "}
                que estas pinturas adquiriram fama.
              </p>

              <p>
                O quadro plasma a repressão do acontecimento que se conhece como
                o levantamento de <strong>3 de Maio</strong>, ocorrido em{" "}
                <strong>1808</strong>, após Napoleão invadir a Espanha e a casa
                real seguir as suas ordens. A revolta estoura a{" "}
                <strong>3 de Maio de 1808</strong>, quando uma parte do povo de
                Madrid tenta evitar a saída, ordenada pelos franceses, do
                infante <strong>D. Francisco de Paula de Bourbon</strong> para a
                França. A situação escalou e as tropas francesas atiraram contra
                os madrilenos sublevados.
              </p>

              <p>
                O comandante das forças francesas, o marechal{" "}
                <strong>Joachim Murat</strong>, decidiu reprimir duramente a
                revolta. Ele escreve no seu diário: “O povo de Madrid deixou-se
                arrastar à revolta e ao assassinato… Sangue francês foi
                derramado. Sangue que demanda vingança.” Os madrilenos que foram
                encontrados com armas foram assassinados. Foram ao redor de{" "}
                <strong>400 vítimas</strong>.{" "}
                <strong>44 revolucionários</strong> foram juntados e fuzilados
                na noite de <strong>2 a 3 de Maio</strong> na colina do{" "}
                <strong>Príncipe Pío</strong>, em Madrid. Este é o episódio que
                Goya mostra no seu quadro.
              </p>

              <p>
                A lenda conta que Goya, com <strong>62 anos</strong>, após ter
                seguido de longe os acontecimentos, ter-se-ia chegado, mais
                tarde, com uma lanterna ao lugar dos fuzilamentos. Goya ainda
                não vivia nas cercanias de Príncipe Pío em <strong>1808</strong>{" "}
                e o quadro foi realizado <strong>seis anos mais tarde</strong>.
              </p>

              <p>
                <strong>Três de Maio de 1808</strong> é uma obra que destaca a
                brutalidade da guerra e a vulnerabilidade dos indivíduos diante
                do poder militar. Goya utiliza sua técnica magistral para criar
                uma cena de grande dramaticidade e emoção, convidando o
                espectador a refletir sobre temas como{" "}
                <strong>violência</strong>, <strong>resistência</strong> e{" "}
                <strong>memória histórica</strong>.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ27;
