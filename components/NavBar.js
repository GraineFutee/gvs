import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">Home</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/dashboard">Log in</Link>
                <Link href="/commande">Commander</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
