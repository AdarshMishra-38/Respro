export default function Navbar() {
  return (
    <div className="navbar mx-3  border border-primary">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul class="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="http://localhost:3000/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/">
            Contact
          </a>
        </li>
        <li className="nav-item nav-underline">
          <a className="nav-link" href="http://localhost:3000/">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}
