import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img1 from "../assets/img/quadro (1).jpg";
import "../styles/quadros/quadro1.css";

function ModalQ1() {
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
        <figure className="galleria-figura w-100 h-100 my-2">
          <img
            src={img1}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100"
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3>Abaporu</h3>
              <span>Tarsila do Amaral</span>
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
        className="bg-modal"
      >
        <Modal.Header closeButton className="minhaModal">
          <Modal.Title id="example-custom-modal-styling-title">
            Abaporu <span className="ocultaSpan">- Tarsila do Amaral</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4">
              <img src={img1} alt="fotos da galleria 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-7 col-lg-8">
              <p>
                <strong>Abaporu</strong> é uma pintura a óleo da artista
                brasileira <b>Tarsila do Amaral</b>. Criada em 1928, esta obra é
                considerada uma das principais representações do período
                antropofágico do movimento modernista no Brasil. O termo
                antropofagia refere-se à ideia de devorar influências
                culturais estrangeiras e transformá-las em algo único e
                brasileiro. Tarsila, com sua paleta vibrante e formas
                simplificadas, captura a essência da cultura brasileira,
                refletindo tanto a identidade nacional quanto a busca por uma
                nova estética.
              </p>

              <p>
                Hoje, <strong>Abaporu</strong> é a tela brasileira mais
                valorizada no mercado mundial das artes, com um valor estimado
                de US$ 40 milhões. Foi comprada pelo colecionador argentino
                Eduardo Costantini por US$ 2,5 milhões em 1995, durante um
                leilão realizado na Christies. Antes disso, a obra pertencia ao
                empresário brasileiro Raul Forbes desde 1985. Atualmente,{" "}
                <strong>Abaporu</strong> encontra-se exposta no Museu de Arte
                Latino-Americana de Buenos Aires (MALBA), onde atrai visitantes
                de todo o mundo, interessados em apreciar não apenas a obra, mas
                também a história e o impacto cultural que ela representa.
              </p>

              <p>
                A pintura retrata uma figura humana com proporções exageradas,
                que se destaca em um ambiente quase surreal. A escolha de
                Tarsila por formas distorcidas e cores intensas não apenas
                desafia as convenções artísticas da época, mas também provoca
                uma reflexão sobre a identidade e a cultura brasileira. O nome
                Abaporu significa homem que come na língua indígena tupi, e
                a obra é frequentemente interpretada como uma metáfora para a
                assimilação cultural e a reinvenção da identidade nacional. Essa
                obra não é apenas uma expressão artística, mas também um
                manifesto que questiona e redefine o que significa ser
                brasileiro na era moderna.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ1;
