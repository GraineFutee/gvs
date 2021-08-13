import Head from "next/head";
import React, { useState } from "react";

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

      <section className="hero is-info is-bold is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <ul className="steps is-narrow is-medium is-centered has-content-centered">
              <li className={`steps-segment ${step === 0 && "is-active"}`}>
                <span className="steps-marker">
                  <span className="icon">
                    <i className="fa fa-cloud-upload-alt"></i>
                  </span>
                </span>
                <div className="steps-content">
                  <p className="heading">Fichiers</p>
                </div>
              </li>
              <li className={`steps-segment ${step === 1 && "is-active"}`}>
                <span className="steps-marker">
                  <span className="icon">
                    <i className="fa fa-concierge-bell"></i>
                  </span>
                </span>
                <div className="steps-content">
                  <p className="heading">Choix du service</p>
                </div>
              </li>
              <li className={`steps-segment ${step === 2 && "is-active"}`}>
                <span className="steps-marker">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                </span>
                <div className="steps-content">
                  <p className="heading">Informations</p>
                </div>
              </li>
              <li
                className={`steps-segment has-gaps ${
                  step === 4 && "is-active"
                }`}
              >
                <span className="steps-marker">
                  <span className="icon">
                    <i className="fa fa-money-check-alt"></i>
                  </span>
                </span>
                <div className="steps-content">
                  <p className="heading">Payment</p>
                </div>
              </li>
              <li className={`steps-segment ${step === 4 && "is-active"}`}>
                <span className="steps-marker is-hollow">
                  <span className="icon">
                    <i className="fa fa-check"></i>
                  </span>
                </span>
                <div className="steps-content">
                  <p className="heading">Confirmation</p>
                </div>
              </li>
            </ul>
            {step === 0 && (
              <Step0 files={files} setFiles={setFiles} setStep={setStep} />
            )}
            {step === 1 && (
              <Step1
                files={files}
                service={service}
                setService={setService}
                setStep={setStep}
              />
            )}
            {step === 2 && <Step2 />}
          </div>
        </div>
      </section>
    </div>
  );
}
