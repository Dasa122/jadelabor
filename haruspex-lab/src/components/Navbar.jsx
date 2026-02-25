import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src="./img/image1.png" alt="Text" style={{ height: '40px' }} />
        <img src="./img/image0.png" alt="Logo" style={{ height: '40px' }} />
      </Link>
      <div className="d-flex gap-3">
        <Link className="nav-link text-white" to="/rolunk">Rólunk</Link>
        <Link className="nav-link text-white" to="/szolgaltatasok">Szolgáltatások</Link>
        <Link className="nav-link text-white" to="/kapcsolat">Kapcsolat</Link>
      </div>
    </nav>
  );
}