import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Galleria from "./galleria";
import minimal from "../minimal.jpg";

class Contattaci extends Component {
  state = {
    utente: {
      nome: "",
      cognome: "",
      email: "",
      indirizzo: "",
      città: "",
      provincia: "",
      nazione: "",
    },
    alrt: false,
    show: false,
    errors: {},
    back: false,
    contatta: false,
    zeroErrori: false,
  };

  province = [
    { nome: "Milano" },
    { nome: "Torino" },
    { nome: "Napoli" },
    { nome: "Roma" },
  ];
  nazioni = [
    { nome: "Italia" },
    { nome: "Francia" },
    { nome: "Spagna" },
    { nome: "Germania" },
  ];
  hideModal() {
    this.setState({ show: !this.state.show });
    this.setState({ zeroErrori: !this.state.zeroErrori });
  }
  handleChange = (e) => {
    const utente = { ...this.state.utente };
    utente[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ utente });
    console.log(e.target.value);
  };

  handleconferma = async (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    console.log(errors);
    //if (errors) return;
    console.log(this.state.utente);
    this.setState({ alrt: !this.state.alrt });
    console.log(this.state.alrt);
    this.setState({ show: !this.state.show });
    if (
      this.state.utente.nome &&
      this.state.utente.cognome &&
      this.state.utente.email &&
      this.state.utente.email.includes("@") &&
      this.state.utente.città &&
      this.state.utente.indirizzo &&
      this.state.utente.nazione &&
      this.state.utente.provincia
    ) {
      console.log("IFFF");
      this.setState({ zeroErrori: true });

      console.log(this.state.zeroErrori);
    }
    if (errors.valueOf.lenght == 0) {
      console.log("sono nell'if");
      this.setState({ show: !this.state.show });
      this.setState({ zeroErrori: true });
      console.log(this.state.zeroErrori);
    }
  };

  validate = () => {
    const errors = {};
    const { utente } = this.state;
    if (utente.nome.trim() === "") errors.nome = "Campo obbligatorio";
    if (utente.cognome.trim() === "") errors.cognome = "Campo obbligatorio";
    if (utente.email.trim() === "") errors.email = "Campo obbligatorio";
    if (!utente.email.trim().includes("@")) errors.email = "Formato non valido";
    if (utente.indirizzo.trim() === "") errors.indirizzo = "Campo obbligatorio";
    if (utente.città.trim() === "") errors.città = "Campo obbligatorio";
    if (utente.provincia.trim() === "") errors.provincia = "Campo obbligatorio";
    if (utente.nazione.trim() === "") errors.nazione = "Campo obbligatorio";

    return Object.keys(errors).lenght === 0 ? null : errors;
  };

  getBack() {
    this.setState({ back: !this.state.back });
    this.setState({ contatta: true });
    this.setState({ zeroErrori: false });
  }
  render() {
    const { show } = this.state;
    switch (this.state.contatta) {
      case false:
        return (
          <div>
            <div
              id="signupb"
              class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
            >
              <div id="compila">
                <font color="dodgerblue">
                  Compila il form per <br />
                  raccogliere maggiori <br />
                  informazioni
                </font>
              </div>
              <img
                src={minimal}
                id="minimal"
                alt={minimal}
                className="bd-placeholder-img card-img-top"
              />
            </div>{" "}
            <div class="container">
              <div
                id="signupbox"
                class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
              >
                <div className="mb-3">
                  <label htmlFor="input" className="form-label">
                    NOME
                  </label>
                  <input
                    type="text"
                    value={this.state.utente.nome}
                    className="form-control"
                    id="nome"
                    name="nome"
                    onChange={this.handleChange}
                    error={this.state.errors.nome}
                  />
                  {this.state.errors.nome && (
                    <div className="alert alert-danger">
                      {this.state.errors.nome}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="input" className="form-label">
                    COGNOME
                  </label>
                  <input
                    value={this.state.utente.cognome}
                    name="cognome"
                    type="text"
                    className="form-control"
                    id="cognome"
                    onChange={this.handleChange}
                    error={this.state.errors.cognome}
                  />
                  {this.state.errors.cognome && (
                    <div className="alert alert-danger">
                      {this.state.errors.cognome}
                    </div>
                  )}
                </div>{" "}
                <div className="mb-3">
                  <label htmlFor="input" className="form-label">
                    E-MAIL
                  </label>
                  <input
                    value={this.state.utente.email}
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={this.handleChange}
                    error={this.state.errors.email}
                  />
                  {this.state.errors.email && (
                    <div className="alert alert-danger">
                      {this.state.errors.email}
                    </div>
                  )}
                </div>{" "}
                <div className="mb-3">
                  <label htmlFor="input" className="form-label">
                    INDIRIZZO
                  </label>
                  <input
                    value={this.state.utente.indirizzo}
                    name="indirizzo"
                    type="text"
                    className="form-control"
                    id="indirizzo"
                    onChange={this.handleChange}
                    error={this.state.errors.indirizzo}
                  />
                  {this.state.errors.indirizzo && (
                    <div className="alert alert-danger">
                      {this.state.errors.indirizzo}
                    </div>
                  )}
                </div>{" "}
                <div className="mb-3">
                  <label htmlFor="input" className="form-label">
                    CITTÀ
                  </label>
                  <input
                    value={this.state.utente.città}
                    name="città"
                    type="text"
                    className="form-control"
                    id="città"
                    onChange={this.handleChange}
                    error={this.state.errors.città}
                  />
                  {this.state.errors.città && (
                    <div className="alert alert-danger">
                      {this.state.errors.città}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">PROVINCIA</label>
                  <select
                    className="form-control"
                    id="select"
                    value={this.state.utente.provincia}
                    name="provincia"
                    onChange={this.handleChange}
                    error={this.state.errors.provincia}
                  >
                    {this.state.errors.provincia && (
                      <div className="alert alert-danger">
                        {this.state.errors.provincia}
                      </div>
                    )}
                    <option> </option>
                    {this.province.map(function (provincia) {
                      return (
                        <option
                          name="provincia"
                          value={`${provincia.nome}`}
                          key={`${provincia.nome}`}
                        >
                          {`${provincia.nome}`}
                        </option>
                      );
                    })}
                  </select>
                </div>{" "}
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">NAZIONE</label>
                  <select
                    className="form-control"
                    id="selectNazione"
                    value={this.state.utente.nazione}
                    name="nazione"
                    onChange={this.handleChange}
                    error={this.state.errors.nazione}
                  >
                    {this.state.errors.nazione && (
                      <div className="alert alert-danger">
                        {this.state.errors.nazione}
                      </div>
                    )}
                    <option></option>
                    {this.nazioni.map(function (nazione) {
                      return (
                        <option
                          name="nazioni"
                          value={`${nazione.nome}`}
                          key={`${nazione.nome}`}
                        >
                          {`${nazione.nome}`}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck"
                    />
                    <label className="form-check-label" htmlFor="dropdownCheck">
                      Accetto la Privacy Policy
                    </label>
                  </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.handleconferma}
                    id="bottone"
                  >
                    Invia
                  </button>
                </div>
              </div>
            </div>
            {this.state.zeroErrori && (
              <div>
                <Modal show={show}>
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
                    <h4 className="conferma">DATI ANAGRAFICA.</h4>
                  </Modal.Header>{" "}
                  <Modal.Body>
                    <table className="conferma">
                      <tr>NOME: {this.state.utente.nome}</tr>{" "}
                      <tr>COGNOME: {this.state.utente.cognome}</tr>
                      <tr>E-MAIL: {this.state.utente.email}</tr>{" "}
                      <tr>INDIRIZZO: {this.state.utente.indirizzo}</tr>{" "}
                      <tr>CITTÀ: {this.state.utente.città}</tr>{" "}
                      <tr>PROVINCIA: {this.state.utente.provincia}</tr>{" "}
                      <tr>NAZIONE: {this.state.utente.nazione}</tr>{" "}
                    </table>
                  </Modal.Body>{" "}
                  <Modal.Footer>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm. "
                      onClick={() => {
                        this.getBack();
                      }}
                    >
                      INVIA
                    </button>
                  </Modal.Footer>
                </Modal>
              </div>
            )}
          </div>
        );
      case true: {
        return <Galleria />;
      }
    }
  }
}

export default Contattaci;
