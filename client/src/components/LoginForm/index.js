import React, {useState}  from "react";
import {Link} from "react-router-dom";
import "./style.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "", 
  });

  const { email, password} = formData;

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

const onSubmit = async e => {
  e.preventDefault();
  
  console.log("Success");
}


    return (
    <div className="div2 col">
      <div className="wrapper">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <h2 className="form-signin-heading">Sign into your Account</h2>
          <br></br>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            placeholder="Email"
            required=""
          />
            <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            placeholder="Password"
            required=""
          />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Sign in
          </button>
          <br></br>
          <Link to="/signup">Need an Account? Signup Here</Link>
          <br></br>
          <Link to="/">Take Me Home</Link>
        </form>
      </div>
    </div>
);

}
export default LoginForm;