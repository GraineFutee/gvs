export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info" href="/dashboard">
                  Log in
                </a>
                <a className="button is-light" href="/commande">
                  Commander
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
