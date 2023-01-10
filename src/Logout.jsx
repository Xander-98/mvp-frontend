import axios from "axios";

export function Logout() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.clear();
    window.location.href = "http://localhost:5173/";
  };

  return (
    <a className="nav-link" href="#" onClick={handleClick}>
      Logout
    </a>
  );
}
