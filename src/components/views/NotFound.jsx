import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Page Not Found</h1>
        <p>
          Return{" "}
          <Link to="/" style={{ color: "lightblue" }}>
            home
          </Link>
          !
        </p>
      </div>
    </div>
  );
};

export default NotFound;
