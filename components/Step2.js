import React, { useState } from "react";

export default function Step2({}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [waitingCode, setWaitingCode] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <p className="title is-4">Informations personelles</p>
      {/* <table className="table is-fullwidth is-striped is-narrow">
        <thead>
          <tr>
            <th>
              fichier <span className="tag is-info">{files.length}</span>
            </th>
          </tr>
        </thead>
      </table>

      <div className="container has-text-centered">
        <span className="tag is-primary is-light is-large is-info">
          {service}
        </span>
      </div> */}
      <div className="field">
        <label className="label has-text-white">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Email input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={waitingCode}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>

        {/* <p className="help is-danger">This email is invalid</p> */}
      </div>
      <div className="field">
        <label className="label has-text-white">Nom complet</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Nom complet"
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={waitingCode}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>
      {waitingCode && (
        <>
          <br />
          <p className="title is-6 has-text-primary">
            Nous vous avons envoye un e-mail, contenant un code de verification
          </p>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Code de verification"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </>
      )}

      {error && (
        <article className="message is-danger" style={{ margin: "8px" }}>
          <div className="message-body">{error}</div>
        </article>
      )}
      <button
        style={{ margin: "8px" }}
        className="button is-primary"
        onClick={() => {
          if (email && name) {
            setWaitingCode(true);
            return setError(null);
          }
          return setError("Merci de taper votre adresse email et votre nom");
        }}
      >
        Suivant
      </button>
    </div>
  );
}
