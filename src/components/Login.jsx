import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { NavLink, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import '../App.css'
import { Label } from "@mui/icons-material";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        alert(user.email + " is logged in");
      })
      .catch((error) => {
        const errorCode = setError("Email or password is incorrect");
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <main  className="main-container">
        <section className="login-section">
          <div className="login-form-container">

            <Form className="form-group">
              <div>
                <Label htmlFor="email-address">Email address</Label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)} className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)} className="form-input"
                />
              </div>

              <div className="form-group">
                <button onClick={onLogin} className="login-button">Login</button>
              </div>
            </Form>
            {error && <p className="error-message">{error}</p>}
            <p className="text-sm text-white text-center">
              No tienes cuenta? <NavLink to="/signup">Registrarse</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;