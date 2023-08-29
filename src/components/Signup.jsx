import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import Form from 'react-bootstrap/Form'
import '../App.css'
import { Label } from "@mui/icons-material";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main className="main-container">
      <section className="login-section">
        <div className="login-form-container">
          <div>
            <h1> FocusApp </h1>
            <Form className="form-group">
              <div>
                <label htmlFor="email-address">Email </label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                  placeholder="Email address"  className="form-input"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="password">Password</Label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password" className="form-input"
                />
              </div>

              <button type="submit" onClick={onSubmit}  className="login-button">
               Registrarse
              </button>
            </Form>

            <p>
              Ya tienes una cuenta? <NavLink to="/login">Iniciar Sesión</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;