import { Link } from "react-router-dom";
import "../../stylesheet/notfound.scss";

function PageNotFound() {
  return (
    <div className="notfound">
      <p>Don't know how you get here, this page does not exist!</p>
      <img
        className="notfound_img"
        src="https://media1.giphy.com/media/az3XlqP9zQ9ry/200.gif?cid=6104955e1a48960c8246250cdc74baadf6914048c12ddadb&rid=200.gif&ct=g&cid=6104955e1a48960c8246250cdc74baadf6914048c12ddadb&rid=200.gif&ct=g"
        alt="This page doesn't exist"
      />
      <Link to="/">
        <i className="home_icon fas fa-reply" />
      </Link>
    </div>
  );
}

export default PageNotFound;
