import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <div>
      <h2>きまわし</h2>
      <nav>
        <ul>
          <li>
            <Link to="TimeLine" >TimeLine</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
