import { Link } from "react-router-dom";

function Avatar() {
  return (
    <Link className="navbar-brand js-scroll-trigger" to="/">
      <span className="d-block d-lg-none">Clarence Taylor</span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="img/profile.jpg"
          alt="..."
        />
      </span>
    </Link>
  );
}
export default Avatar;
