import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img14 from "../assets/img/quadro (14).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ14() {
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
            src={img14}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3>A Ronda Noturna</h3>
              <span> Rembrandt</span>
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
            A Ronda Noturna
            <span className="ocultaSpan"> - Rembrandt</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <img
                src={img14}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <p>
                <strong>A Ronda Noturna</strong> (em neerlandês:{" "}
                <strong>De Nachtwacht</strong>) é uma pintura a óleo sobre tela
                do pintor neerlandês <strong>Rembrandt</strong>, pintada entre{" "}
                <strong>1639 e 1642</strong>. A obra mede{" "}
                <strong>380 cm de altura</strong> e{" "}
                <strong>454 cm de largura</strong>, e mostra a{" "}
                <strong>Guarda Cívica de Amsterdã</strong> sob comando do
                capitão <strong>Frans Banning Cocq</strong>.
              </p>

              <p>
                Geralmente considerada como a <strong>magnum opus</strong> de
                Rembrandt, <strong>A Ronda Noturna</strong> é uma das pinturas
                mais conhecidas do <strong>Barroco</strong>. A peça é de
                propriedade do município de Amsterdã e faz parte da exposição
                permanente do <strong>Rijksmuseum</strong>, o principal museu
                especializado em pintura neerlandesa.
              </p>

              <p>
                A obra é notável não apenas por seu tamanho, mas também pela sua
                composição inovadora. Rembrandt rompeu com a tradição de
                retratos de grupo estáticos, apresentando os personagens em{" "}
                <strong>posturas dinâmicas</strong> e em ação. A cena retrata um
                momento de preparação, onde os membros da milícia estão prontos
                para avançar, criando uma sensação de movimento e urgência.
              </p>

              <p>
                A iluminação é um dos aspectos mais impressionantes da pintura.
                Rembrandt utiliza um jogo de luz e sombra, conhecido como{" "}
                <strong>chiaroscuro</strong>, para destacar os principais
                personagens e criar um efeito dramático. O capitão Frans Banning
                Cocq e seu tenente, <strong>Willem van Ruytenburch</strong>, são
                iluminados de maneira proeminente, simbolizando sua importância
                na milícia.
              </p>

              <p>
                A composição também inclui uma série de detalhes intrigantes,
                como a presença de uma <strong>menina</strong> ao fundo, que
                muitos acreditam ser um símbolo da milícia, segurando um frango.
                Este elemento peculiar adiciona uma camada de complexidade à
                obra e provoca questionamentos sobre o significado e a intenção
                de Rembrandt ao incluí-la.
              </p>

              <p>
                O título original da pintura era{" "}
                <strong>
                  A Companhia de Frans Banning Cocq e de Willem van Ruytenburch
                </strong>
                , mas foi mudado para <strong>A Ronda Noturna</strong> devido ao
                fundo escurecido da tela, que dá a impressão de uma cena
                noturna. No entanto, a cena retratada é, na verdade, diurna,
                ocorrendo ao meio-dia. A obra foi cortada em 1715 para se
                ajustar ao espaço em que foi exibida, o que resultou na perda de
                algumas figuras.
              </p>

              <p>
                Desde sua criação, <strong>A Ronda Noturna</strong> tem sido
                objeto de inúmeras análises e interpretações. A obra é
                frequentemente vista como uma crítica à sociedade da época e um
                reflexo das tensões políticas e sociais em Amsterdã. A
                habilidade de Rembrandt em capturar a essência humana e a
                complexidade das interações sociais é um dos motivos pelos quais
                a pintura continua a ser estudada e admirada.
              </p>

              <p>
                A obra permanece como um ícone da arte barroca e um testemunho
                do gênio de Rembrandt. Sua capacidade de inovar e desafiar as
                normas da pintura de retratos de grupo fez de{" "}
                <strong>A Ronda Noturna</strong> uma referência na história da
                arte. O quadro não apenas documenta um momento histórico, mas
                também evoca emoções profundas, convidando o espectador a
                refletir sobre a condição humana e a luta pela identidade em
                tempos de incerteza.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ14;
