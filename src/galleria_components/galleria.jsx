import React, { Component } from "react";
import Contattaci from "./contattaci";
import img1 from "../img1.jfif";
import img2 from "../img2.jfif";
import img3 from "../img3.jfif";
import { Modal } from "react-bootstrap";
import "./galleria.css";

class Galleria extends Component {
  state = {
    form: false,
    show: false,
    idImmagine: 0,
  };

  campi = [
    { id: 1, img: img1, nome: "VESTITO GIALLO" },
    { id: 2, img: img2, nome: "VESTITO ROSSO" },
    { id: 3, img: img3, nome: "VESTITO ARANCIONE" },
    { id: 4, img: img3, nome: "VESTITO ARANCIONE" },
    { id: 5, img: img1, nome: "VESTITO GIALLO" },
    { id: 6, img: img2, nome: "VESTITO ROSSO" },
    { id: 7, img: img2, nome: "VESTITO ROSSO" },
    { id: 8, img: img3, nome: "VESTITO ARANCIONE" },
    { id: 9, img: img1, nome: "VESTITO GIALLO" },
  ];

  handleModale = (id) => {
    console.log(id.id);
    this.setState({ show: true });
    console.log(this.state.show);

    this.state.idImmagine = id.id - 1;

    console.log(id.id);

    console.log(this.state.idImmagine);
  };
  hideModal() {
    this.setState({ show: !this.state.show });
  }
  handleForm() {
    this.setState({ form: true });
    console.log(this.state.form);
  }

  next() {
    console.log("NEEEXT");
    if (this.state.idImmagine < 8) {
      this.state.idImmagine = this.campi[this.state.idImmagine].id;
    } else {
      console.log("SONO NELL' ELSEEE");
      this.state.idImmagine = 0;
      this.campi[this.state.idImmagine].id = 1;
    }
    console.log(this.campi[this.state.idImmagine].id);

    console.log(this.state.idImmagine);
    this.handleModale(this.campi[this.state.idImmagine]);
  }

  prev() {
    console.log("PREEEV");
    if (this.state.idImmagine > 0) {
      this.state.idImmagine = this.campi[this.state.idImmagine].id - 2;
    } else {
      console.log("SONO NELL' ELSEEE");
      this.state.idImmagine = 8;
      this.campi[this.state.idImmagine].id = 9;
    }
    console.log(this.campi[this.state.idImmagine].id);

    console.log(this.state.idImmagine);
    this.handleModale(this.campi[this.state.idImmagine]);
  }
  render() {
    const { show } = this.state;

    switch (this.state.form) {
      case false:
        return (
          <div className="album py-5 bg-light">
            <header>
              <div class="col-md-4 ">
                <h4 className="col-md-4  ">Your shop</h4>
                <button
                  type="button"
                  className="btn btn-primary btn-sm. "
                  onClick={() => {
                    this.handleForm();
                  }}
                >
                  Contattaci
                </button>
              </div>
            </header>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <img
                  src={img1}
                  id="1"
                  alt={img1}
                  className="bd-placeholder-img card-img-top"
                  value="1"
                  onClick={() => this.handleModale(this.campi[0])}
                />

                <img
                  src={img2}
                  id="2"
                  alt={img2}
                  className="bd-placeholder-img card-img-top"
                  onClick={() => this.handleModale(this.campi[1])}
                />

                <img
                  src={img3}
                  id="3"
                  alt={img3}
                  className="bd-placeholder-img card-img-top"
                  onClick={() => this.handleModale(this.campi[2])}
                />

                <img
                  src={img3}
                  id="4"
                  alt={img3}
                  className="bd-placeholder-img card-img-top"
                  onClick={() => this.handleModale(this.campi[3])}
                />
                <img
                  src={img1}
                  id="5"
                  alt={img1}
                  className="bd-placeholder-img card-img-top"
                  onClick={() => this.handleModale(this.campi[4])}
                />
                <img
                  src={img2}
                  id="6"
                  alt={img2}
                  className="bd-placeholder-img card-img-top"
                  onClick={() => this.handleModale(this.campi[5])}
                />

                <img
                  src={img2}
                  id="7"
                  alt={img2}
                  className="bd-placeholder-img card-img-top"
                  onClick={() => this.handleModale(this.campi[6])}
                />
                <img
                  src={img3}
                  id="8"
                  alt={img3}
                  className="bd-placeholder-img card-img-top"
                  onClick={() => this.handleModale(this.campi[7])}
                />
                <img
                  src={img1}
                  id="9"
                  alt={img1}
                  className="bd-placeholder-img card-img-top"
                  onClick={() => this.handleModale(this.campi[8])}
                />
              </div>
            </div>

            <Modal show={show} onHide={""} className="modale">
              {" "}
              <Modal.Header
                closeButton
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  this.hideModal();
                }}
              >
                {" "}
                {this.campi[this.state.idImmagine].nome}
              </Modal.Header>
              <Modal.Body className="modalBody">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active"></div>
                    <img
                      src={this.campi[this.state.idImmagine].img}
                      class="d-block w-100"
                      alt={this.campi[this.state.idImmagine].img}
                    />
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                    onClick={() => {
                      this.prev();
                    }}
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden"></span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                    onClick={() => {
                      this.next();
                    }}
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden"></span>
                  </a>
                </div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>{" "}
              </Modal.Body>{" "}
            </Modal>
          </div>
        );
      case true:
        return <Contattaci />;
    }
  }
}

export default Galleria;
