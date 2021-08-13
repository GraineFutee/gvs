import React, { useState } from "react";

export default function Step1({ files, service, setService, setStep }) {
  const [error, setError] = useState(null);

  return (
    <div>
      <p className="title is-4">Choix du service</p>
      <table className="table is-fullwidth is-striped is-narrow">
        <thead>
          <tr>
            <th>
              fichier <span className="tag is-info">{files.length}</span>
            </th>
          </tr>
        </thead>
      </table>

      <div className="buttons has-addons is-centered">
        <button
          className={`button ${
            service === "stereo mastering" && "is-selected is-info is-light"
          }`}
          onClick={() => setService("stereo mastering")}
        >
          Stereo mastering - <span className="tag is-info">80€</span>
        </button>
        <button
          className={`button ${
            service === "stems mastering" && "is-selected is-info is-light"
          }`}
          onClick={() => setService("stems mastering")}
        >
          Stems mastering - <span className="tag is-info">120€</span>
        </button>
        <button
          className={`button ${
            service === "mixage" && "is-selected is-info is-light"
          }`}
          onClick={() => setService("mixage")}
        >
          Mixage - <span className="tag is-info">450€</span>
        </button>
      </div>

      {error && (
        <article className="message is-danger" style={{ margin: "8px" }}>
          <div className="message-body">{error}</div>
        </article>
      )}
      <button
        style={{ margin: "8px" }}
        className="button is-primary"
        disabled={files.length === 0}
        onClick={() => setStep(2)}
      >
        Suivant
      </button>
    </div>
  );
}
