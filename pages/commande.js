import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";

import NavBar from "../components/NavBar";
import Step0 from "../components/Step0";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";

export default function Home() {
  const [step, setStep] = useState(0);
  const [files, setFiles] = useState([]);
  const [service, setService] = useState("stereo mastering");

  return (
    <div>
      <Head>
        <title>Grande Ville</title>
        <meta name="description" content="Grande Ville" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <section className="hero is-link is-bold is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="box">
              <div className="columns">
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-3by2">
                        <img
                          src="https://bulma.io/images/placeholders/1280x960.png"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div>
                    <div className="field">
                      <label className="label">Service</label>
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select>
                            <option>Stereo mastering</option>
                            <option>Stems mastering</option>
                            <option>Mixage</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Nombre de tracks</label>
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          placeholder={0}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Delai</label>
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select>
                            <option>Normal (~1 semaine)</option>
                            <option>Rapide (~3 jours)</option>
                            <option>Express (~1 jour)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* <div className="field">
                      <label className="label">Message</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          placeholder="Textarea"
                        ></textarea>
                      </div>
                    </div> */}

                    <div className="field">
                      <div className="control">
                        <label className="checkbox">
                          <input type="checkbox" /> I agree to the{" "}
                          <a href="#">terms and conditions</a>
                        </label>
                      </div>
                    </div>

                    <div className="has-text-right my-5 mr-3">
                      <p className="title is-2 has-text-link">80€</p>
                    </div>

                    {/* <div className="field">
                      <div className="control">
                        <label className="radio">
                          <input type="radio" name="question" />
                          Yes
                        </label>
                        <label className="radio">
                          <input type="radio" name="question" />
                          No
                        </label>
                      </div>
                    </div> */}

                    <div className="field is-grouped is-grouped-right">
                      <div className="control">
                        <button className="button is-link">Commander</button>
                      </div>
                      <div className="control">
                        <button className="button is-link is-light">
                          <Link href="/">Annuler</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
