import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <button className="navbar-item button is-dark">Home</button>
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/dashboard">
                  <button className="navbar-item button is-info">Log in</button>
                </Link>
                <Link href="/commande">
                  <button className="navbar-item button is-light">
                    Commander
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
