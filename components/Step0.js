import React, { useState } from "react";

export default function Step0({ files, setFiles, setStep }) {
  const [error, setError] = useState(null);

  return (
    <div>
      <p className="title is-4">Ajouter les fichers (max 8)</p>
      <table className="table is-fullwidth is-striped is-narrow">
        <thead>
          <tr>
            <th>
              fichier <span className="tag is-info">{files.length}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((fichier) => (
            <tr key={fichier.name}>
              <td>{fichier.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className={`file is-boxed is-centered ${
          files.length === 8 && "is-danger"
        }`}
      >
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="resume"
            multiple
            onChange={(e) => {
              const newFiles = Array.from(e.target.files);
              if (newFiles.length > 8) {
                return setError(
                  "Vous ne pouvez ajouter que 8 fichiers maximum"
                );
              }
              if (files.length > 0) {
                if (newFiles.length + files.length > 8) {
                  return setError(
                    "Vous ne pouvez ajouter que 8 fichiers maximum"
                  );
                }
                setFiles([...files, ...newFiles]);
                return setError(null);
              }
              setFiles(newFiles);
              return setError(null);
            }}
            disabled={files.length === 8}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Ajouter un ou plusieurs fichier</span>
          </span>
        </label>
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
        onClick={() => setStep(1)}
      >
        Suivant
      </button>
    </div>
  );
}
