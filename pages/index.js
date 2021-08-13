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
        className="hero is-dark is-fullheight-with-navbar"
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
      <section className="hero is-dark is-danger">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-centered is-multiline">
              <div className="column is-3" style={{ padding: "4px" }}>
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
              <div className="column is-3" style={{ padding: "4px" }}>
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
              <div className="column is-3" style={{ padding: "4px" }}>
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
              <div className="column is-3" style={{ padding: "4px" }}>
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
              <div className="column is-3" style={{ padding: "4px" }}>
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
              <div className="column is-3" style={{ padding: "4px" }}>
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
              <div className="column is-3" style={{ padding: "4px" }}>
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
              <div className="column is-3" style={{ padding: "4px" }}>
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
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <p>
                  Spécialisé dans le Mastering et le mixage audio depuis plus 10
                  ans, le Grande ville studio est devenu la référence
                  incontournable des studios Français.
                </p>
                <p>
                  Equipé d’un matériel analogique haut de gamme, nos ingénieurs
                  travaillent en étroite collaboration avec les artistes pour
                  offrir un résultat premium.
                </p>
                <p>
                  – Mastering Digital, CD, streaming, I Tunes, optimisation des
                  niveaux, EQ, stéréo m/s, conformation, montage et édition des
                  titres, inscription Gracenote sur demande, export DDP, code
                  PQ, code UPC/EAN, CD text, CD norme Red Book, code ISRC,
                  dithering, fade in/out, création master ITunes sur demande)
                </p>
                <p>
                  – Mastering par Stem travail à partir des pistes/groupes
                  séparés ex : Kick, Bass, Drum, Rythm, Synth, Guitars, Voices,
                  FX Nous sommes spécialisés dans le mastering pour vinyle, CD,
                  et plates-formes digitales. Nous proposons également du
                  mastering par stems et du mixtering, approche novatrice du
                  mixage qui permet de profiter du son de notre chaine de
                  mastering sur tous les éléments de votre mix, grâce à une
                  excellente qualité de conversion et de sommation analogique.
                </p>
              </div>
              <div className="column">
                <h2 className="title is-3">Services</h2>
                <div className="columns">
                  <div className="column is-offset-1">
                    <aside className="menu">
                      <li className="menu-label">
                        Stereo mastering online <b>/80€</b>
                        <p>
                          <small>
                            Fichier stéréo ou 2 pistes Acapella Instrumental
                            Mastering entièrement analogique
                          </small>
                        </p>
                      </li>
                      <li className="menu-label">
                        Stems mastering online <b>/120€</b>
                        <p>
                          <small>
                            8 pistes maximum, pour peaufiner votre mixage maison
                            ou un mix avec des défauts ...
                          </small>
                        </p>
                      </li>
                      <li className="menu-label">
                        Mixage <b>/450€</b>
                      </li>
                      <li className="menu-label">
                        Production <b>/Prix sur demande</b>
                        <p>
                          <small>
                            Les projets ayant besoin de production, les équipes
                            de compositeurs du grande ville studio sont
                            disponibles pour vous accompagner
                          </small>
                        </p>
                      </li>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p>
              Travaillez avec nous à distance grâce à notre service
              d’E-Mastering : Envoyez directement vos fichiers à Grande ville
              studio Mastering via notre Wetransfer ou notre serveur FTP
              n’hésitez pas à nous communiquer vos références musicales ainsi
              que vos directives. Afin d&apos;écouter et d&apos;approuver le
              Mastering malgré la distance, nous mettons à votre disposition
              notre lecteur de référence « HOFA DDP Player » (sécurisé et
              disponible pour Mac et PC). Il vous permettra également de graver
              un CD Audio, d&apos;exporter des fichiers WAV et enfin de valider
              le Master DDP avant le départ à l’usine (pauses, fades, codes
              ISRC, CD text...). Grande ville studioMastering vous propose de
              travailler à distance grâce à un service d’E-Mastering
              personnalisé ou d’assister, sur rendez-vous, aux séances en
              compagnie de notre ingénieur. Nous recommandons l&apos;envoi de
              fichiers audio WAV ou AIFF, entrelacés en 24bit-44.1kHz minimum.
              Nous acceptons tous les supports de fichiers audios numériques
              (disque dur, clé USB, DVD, DAT, etc. ), mais également les
              supports analogiques suivants : ¼ de pouce, ½ pouce et autres sur
              demande.
            </p>
            <button className="button is-large is-dark">
              <Link href="/dashboard">Commencer!</Link>
            </button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>blabkablablabalbalba</p>
          <p>blabkablablabalbalba</p>
          <p>blabkablablabalbalba</p>
        </div>
      </footer>
    </div>
  );
}
