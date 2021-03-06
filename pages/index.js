import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grande Ville</title>
        <meta name="description" content="Grande Ville" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <section
        className="hero is-dark is-large"
        style={{
          backgroundImage: 'url("/studio.webp")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-half">
                <Image
                  src="/logo_white.webp"
                  alt="gvs logo"
                  width="200%"
                  height="200%"
                />
                {/* <p className="title">
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-light is-bold">
        <div className="hero-body" style={{ padding: "15px" }}>
          <div className="columns is-centered is-multiline">
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/lil-uzi-vert.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/hamza.webp")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/gazo.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/alpha.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/alpha.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/gazo.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/hamza.webp")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/lil-uzi-vert.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/alpha.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/gazo.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/hamza.webp")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
            <div className="column is-2" style={{ padding: "2px" }}>
              <figure
                className="image is-square"
                style={{
                  backgroundImage: 'url("/artists/lil-uzi-vert.jpeg")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></figure>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="columns is-centered is-vcentered">
            <div className="column is-2" />
            <div className="column">
              <figure className="image">
                <Image
                  src="/logos/redbull.webp"
                  alt="redbull logo"
                  width="100%"
                  height="100%"
                />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <Image
                  src="/logos/sony.webp"
                  alt="sony logo"
                  width="100%"
                  height="100%"
                />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <Image
                  src="/logos/warner.webp"
                  alt="warner logo"
                  width="100%"
                  height="100%"
                />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <Image
                  src="/logos/because.webp"
                  alt="because logo"
                  width="100%"
                  height="100%"
                />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <Image
                  src="/logos/universal.webp"
                  alt="universal logo"
                  width="100%"
                  height="100%"
                />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <Image
                  src="/logos/rec118.webp"
                  alt="rec118 logo"
                  width="100%"
                  height="100%"
                />
              </figure>
            </div>
            <div className="column is-2" />
          </div>
        </div>
      </section>
      <section className="hero is-medium is-link is-bold">
        <div className="hero-body">
          <div className="container">
            {/* <h2 className="title is-1">Services</h2> */}
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-5 has-text-link">
                        STEREO MASTERING{" "}
                        <small className="has-text-grey">
                          /a partir de 80???
                        </small>
                      </p>
                      <p className="subtitle is-6 has-text-black">
                        Fichier st??r??o ou 2 pistes Acapella Instrumental
                        Mastering enti??rement analogique
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-5 has-text-link">
                        STEMS MASTERING{" "}
                        <small className="has-text-grey">
                          /a partir de 120???
                        </small>
                      </p>
                      <p className="subtitle is-6 has-text-black">
                        8 pistes maximum, pour peaufiner votre mixage maison ou
                        un mix avec des d??fauts ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-5 has-text-link">
                        MIXAGE{" "}
                        <small className="has-text-grey">
                          /a partir de 450???
                        </small>
                      </p>
                      <p className="subtitle is-6 has-text-black">
                        Les projets ayant besoin de production, les ??quipes de
                        compositeurs du grande ville studio sont disponibles
                        pour vous accompagner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-5 has-text-link">
                        PRODUCTION{" "}
                        <small className="has-text-grey">
                          /prix sur demande
                        </small>
                      </p>
                      <p className="subtitle is-6 has-text-black">
                        Les projets ayant besoin de production, les ??quipes de
                        compositeurs du grande ville studio sont disponibles
                        pour vous accompagner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p style={{ padding: "20px" }}>
                  Travaillez avec nous ?? distance gr??ce ?? notre service
                  d???E-Mastering : Envoyez directement vos fichiers ?? Grande
                  ville studio Mastering via notre Wetransfer ou notre serveur
                  FTP n???h??sitez pas ?? nous communiquer vos r??f??rences musicales
                  ainsi que vos directives. Afin d&apos;??couter et
                  d&apos;approuver le Mastering malgr?? la distance, nous mettons
                  ?? votre disposition notre lecteur de r??f??rence ?? HOFA DDP
                  Player ?? (s??curis?? et disponible pour Mac et PC). Il vous
                  permettra ??galement de graver un CD Audio, d&apos;exporter des
                  fichiers WAV et enfin de valider le Master DDP avant le d??part
                  ?? l???usine (pauses, fades, codes ISRC, CD text...). Grande
                  ville studioMastering vous propose de travailler ?? distance
                  gr??ce ?? un service d???E-Mastering personnalis?? ou d???assister,
                  sur rendez-vous, aux s??ances en compagnie de notre ing??nieur.
                  Nous recommandons l&apos;envoi de fichiers audio WAV ou AIFF,
                  entrelac??s en 24bit-44.1kHz minimum. Nous acceptons tous les
                  supports de fichiers audios num??riques (disque dur, cl?? USB,
                  DVD, DAT, etc. ), mais ??galement les supports analogiques
                  suivants : ?? de pouce, ?? pouce et autres sur demande.
                </p>
                <br />
                <div className="has-text-centered">
                  <button className="button is-large is-link is-light">
                    <Link href="/dashboard">Commencer!</Link>
                  </button>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>&copy; 2021 GrandeVille</p>
        </div>
      </footer>
    </div>
  );
}
