import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import NavBar from "../components/NavBar";

export default function Home() {
  const [connected, setConnected] = useState(false);

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
          <div className="container has-text-centered">
            {connected ? (
              <table className="table is-fullwidth is-striped is-narrow">
                <tbody>
                  <tr>
                    <td>Odysey album</td>
                    <td>8songs</td>
                    <td>8/07/2021</td>
                    <td>
                      <span className="tag is-warning">In-progress</span>
                    </td>
                    <td>
                      <button className="button is-small is-light">
                        <span className="icon is-small">
                          <i className="fas fa-download"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>MoonLight</td>
                    <td>1song</td>
                    <td>9/07/2021</td>
                    <td>
                      <span className="tag is-success">Done</span>
                    </td>
                    <td>
                      <div className="buttons is-centered">
                        <button className="button is-small is-light">
                          <span className="icon is-small">
                            <i className="fas fa-download"></i>
                          </span>
                        </button>
                        <button className="button is-small is-success">
                          <span className="icon is-small">
                            <i className="fas fa-download"></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Raptor</td>
                    <td>2songs</td>
                    <td>05/07/2021</td>
                    <td>
                      <span className="tag is-danger">Canceled</span>
                    </td>
                    <td>
                      <button className="button is-small is-light">
                        <span className="icon is-small">
                          <i className="fas fa-download"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="title">
                <Image
                  src="/logo_white.webp"
                  alt="gvs logo"
                  height="200%"
                  width="200%"
                />
              </div>
            )}
            <div className="buttons is-centered">
              <button
                className={`button is-light ${
                  connected ? "is-danger" : "is-link"
                }`}
                onClick={() => setConnected(!connected)}
              >
                {connected ? "Log Out" : "Log In"}
              </button>
              <button className="button is-light">
                <Link href="/commande">Commander</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
