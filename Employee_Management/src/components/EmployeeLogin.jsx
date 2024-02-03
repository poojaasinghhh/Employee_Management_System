import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/employee/employee_login", data)
      .then((result) => {
        console.log(result);
        if (result.data.loginStatus) {
          navigate("/employee_detail/" + result.data.id);
        } else {
          console.log("failed");
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className=" error"> {error && error} </div>{" "}
          <h1 className="h3 mb-3 text"> Please sign in </h1>{" "}
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              size="40"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
            />{" "}
            <label htmlFor="floatingInput"> Email address </label>{" "}
          </div>{" "}
          <div className="form-floating">
            <input
              type="password"
              className="form-control "
              id="floatingPassword"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />{" "}
            <label htmlFor="floatingPassword"> Password </label>{" "}
          </div>{" "}
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label text" htmlFor="flexCheckDefault">
              Agree to the Terms & Conditions{" "}
            </label>{" "}
          </div>{" "}
          <button className="btn btn-primary w-100 py-2 submit " type="submit">
            Sign in
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default Login;
