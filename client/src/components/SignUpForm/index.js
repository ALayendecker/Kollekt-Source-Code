import React, {useState}  from "react";
import {Link} from "react-router-dom"
import "./style.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "", 
    username: "",
    email: "",
    password: "", 
    password2: ""
  });

  const {name, username, email, password, password2} = formData;

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

const onSubmit = e => {
  e.preventDefault();
  if(password !== password2) {
    console.log("Passwords do not match");
} else {
  console.log(formData);
}
}

    return (
    <div className="div2 col">
      <div className="wrapper">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <h2 className="form-signin-heading">Create an Account</h2>
          <br></br>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={e => onChange(e)}
            required=""
            // autofocus=""
          />
          <input
            type="username"
            className="form-control"
            name="username"
            value={username}
            onChange={e => onChange(e)}
            placeholder="Username"
            required=""
          />
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
             <input
            type="password"
            className="form-control"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            placeholder="Verify Password"
            required=""
          />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Sign Up
          </button>
          <br></br>
          <Link to="/login">Already a member? Log In Here</Link>
          <br></br>
          <Link to="/">Take Me Home</Link>
        </form>
      </div>
    </div>
);

}
export default SignUpForm;