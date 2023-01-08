import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const params = new FormData(e.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((res) => {
        console.log(res.data);
        axios.defaults.headers.common["Authorization"] = "Bearer" + res.data.jwt;
        localStorage.setItem("jwt", res.data.jwt);
        e.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.res);
        setErrors(["Invalid username or password"]);
      });
  };

  return (
    <footer>
      <div id="login" style={{ position: "" }}>
        <h1>Login</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            Username: <input className="form-control" name="username" type="username" />
          </div>
          <div>
            Password: <input className="form-control" name="password" type="password" />
          </div>
          <button className="mt-3 btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </footer>
  );
}
