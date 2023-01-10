import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const params = new FormData(e.target);
    axios
      .post("http://localhost:3000/signup", params)
      .then((res) => {
        console.log(res.data);
        e.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(error.response);
      });
  };

  return (
    <div
      id="signup"
      style={{
        margin: "auto",
        width: "150px",
        height: "150px",
        padding: "5px",
        position: "fixed",
        left: "0px",
        top: "0px",
        backgroundColor: "#313131",
      }}
    >
      <h1 style={{ color: "white" }}>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Username: <input className="form-control" name="username" type="text" />
        </div>
        <div>
          Email: <input className="form-control" name="email" type="text" />
        </div>
        <div>
          Password: <input className="form-control" name="password" type="text" />
        </div>
        <div>
          Password: <input className="form-control" name="password_confirmation" type="text" />
        </div>
        <button className="mt-3 btn btn-primary" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
