import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img18 from "../assets/img/quadro (18).jpg";

import "../styles/quadros/quadro1.css";

function ModalQ18() {
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
            src={img18}
            alt="fotos da galleria 1"
            className="img-fluid my-2 h-100 "
          />
          <figcaption className="galleria-figcaption">
            <div className="textos-figcaption">
              <h3> O Casal Arnolfini</h3>
              <span> Jan van Eyck</span>
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
            O Casal Arnolfini
            <span className="ocultaSpan"> - Jan van Eyck</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="minhaModal">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-5">
              <img
                src={img18}
                alt="fotos da galleria 1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-7 col-lg-7">
              <p>
                <strong>O Casal Arnolfini</strong> é o mais famoso quadro do
                pintor flamengo <strong>Jan van Eyck</strong>, pintado em{" "}
                <strong>1434</strong>. A obra exibe o então rico comerciante{" "}
                <strong>Giovanni Arnolfini</strong> e sua esposa{" "}
                <strong>Giovanna Cenami</strong>, que se estabeleceram e
                prosperaram na cidade de <strong>Bruges</strong> (hoje Bélgica),
                entre <strong>1420 e 1472</strong>. Nos dias de hoje, os
                historiadores da arte discutem a imagem que o quadro representa
                exatamente; a tese dominante durante muito tempo, introduzida
                por <strong>Erwin Panofsky</strong> em um ensaio de{" "}
                <strong>1934</strong>, assegura que a imagem corresponde ao{" "}
                <strong>matrimônio</strong> de ambos, celebrado em segredo e
                testemunhado pelo pintor.
              </p>

              <p>
                Contudo, muitas outras interpretações têm sido propostas acerca
                da obra, e o consenso atual é que a teoria de Panofsky é{" "}
                <strong>dificilmente sustentável</strong>. Especula-se sobre a
                presença efetiva do pintor no casamento dos Arnolfini, que
                explicaria a razão de o pintor neerlandês ter escrito no quadro,
                em latim, <strong>“Johannes de Eyck fuit hic”</strong> (Jan van
                Eyck esteve aqui).
              </p>

              <p>
                A obra está na <strong>National Gallery</strong>, em Londres, e
                é considerada uma das obras mais notáveis de Van Eyck. É um dos
                mais antigos retratos de tema não hagiográfico conservados e,
                por sua vez, representa uma cena relativamente costumeira. O
                casal se apresenta de pé, em sua alcova; o esposo bendiz a sua
                mulher, que lhe oferece sua mão direita, enquanto apoia a
                esquerda no ventre.
              </p>

              <p>
                A pose das personagens resulta teatral e cerimoniosa,
                praticamente hierática; alguns especialistas veem nessas
                atitudes fleumáticas certa comicidade, ainda que a estendida
                interpretação que lê no retrato a representação de um casamento
                atribua a esse facto o seu ar pomposo.
              </p>

              <p>
                A obra, considerada muito inovadora para a época em que foi
                concebida, exibe diversos conceitos novos relativamente às{" "}
                <strong>perspectivas</strong> e à{" "}
                <strong>acentuação dos segundos planos</strong>. Note-se o{" "}
                <strong>espelho</strong> no fundo da composição, em que toda a
                cena aparece invertida, tal como a imagem do próprio artista.
              </p>

              <p>
                O retrato é uma obra isolada, pintada a{" "}
                <strong>óleo sobre tábua de carvalho</strong>. A pintura a óleo
                consiste em pigmentos (pó de substância corante, como terra e
                flores), utilizando azeite de tratamento como solvente, e azeite
                de linhaça como aglutinante. As vantagens do óleo são sua
                resistência e plasticidade, permitindo a Van Eyck representar a
                realidade com a maior exatidão possível.
              </p>

              <p>
                A crença de que o casal já era casado era sustentada pelo
                penteado da mulher, já que na época, quando as mulheres não eram
                casadas, tinham que usar os cabelos soltos. As poses de duas
                figuras revelam papéis tradicionais de gênero – a mulher fica
                perto da cama, marcando simbolicamente seu papel de cuidadora da
                casa, enquanto Giovanni fica ao lado da janela aberta,
                destacando seu papel no mundo exterior.
              </p>

              <p>
                O gesto mútuo de mãos unidas revela o ato de juramento. Embora a
                mulher pareça estar grávida, os estudiosos sugerem que esse
                traje estava na moda na época. Arnolfini era um comerciante de
                tecidos, o que significava que a moda era muito importante para
                ele, e quanto mais roupas uma pessoa usava, mais ricas elas eram
                consideradas.
              </p>

              <p>
                Essas imagens também estão relacionadas à maneira como a{" "}
                <strong>Virgem Maria</strong> e outras santas foram
                representadas durante o início do período renascentista, bem
                como com o desejo do casal de ser mostrado como propenso à{" "}
                <strong>fertilidade</strong> e <strong>descendência</strong>.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalQ18;
