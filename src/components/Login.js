import React, { useState } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(props.form);
  const [msg, setMsg] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  function changeForm() {
    console.log(form);
    if (form === "Login") setForm("Sign Up");
    else setForm("Login");
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: [e.target.value] });
  };

  const errorMessage = (message) => {
    setMsg(message);
    setTimeout(() => {
      setMsg(null);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      credentials["password"][0] !== credentials["confirmPassword"][0] &&
      form !== "Login"
    ) {
      errorMessage("Passwords does not match");
    } else {
      if (form === "Sign Up") {
        try {
          const { email, password } = credentials;
          await createUserWithEmailAndPassword(auth, email[0], password[0]);
          navigate("/");
        } catch (err) {
          errorMessage(err.message);
        }
      } else {
        try {
          const { email, password } = credentials;
          await signInWithEmailAndPassword(auth, email[0], password[0]);
          navigate("/");
        } catch (err) {
          errorMessage(err.message);
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-b from-black to-red-950 bg-blend-multiply p-8">
      <div className="flex flex-col justify-start items-center h-[600px] w-[500px] bg-black bg-opacity-30 border-red-800 border-[1px] rounded-xl p-14">
        <div className="flex flex-wrap justify-center items-center space-y-2 space-x-2">
          <button
            onClick={changeForm}
            className={`${
              form === "Login" ? "bg-red-900" : ""
            } hover:text-red-500 rounded-2xl border-red-800 border-[1px] w-28 text-white p-5`}
          >
            Sign In
          </button>
          <button
            onClick={changeForm}
            className={`${
              form === "Login" ? "" : "bg-red-900"
            } hover:text-red-500 rounded-2xl border-red-800 border-[1px] w-28 text-white p-5`}
          >
            Sign Up
          </button>
        </div>
        <div id="form" className="mt-10 w-full">
          <form onSubmit={handleSubmit} action="">
            <input
              onChange={handleChange}
              id="email"
              name="email"
              className="bg-black rounded text-white w-full border mb-10 mt-10 border-gray-300"
              type="email"
              placeholder="Enter your email"
            />
            <input
              onChange={handleChange}
              id="password"
              name="password"
              className="bg-black rounded text-white w-full border mb-10 border-gray-300"
              type="password"
              placeholder="Enter your password"
            />
            <input
              onChange={handleChange}
              id="confirmPassword"
              name="confirmPassword"
              className={`${
                form === "Login" ? "hidden" : ""
              } bg-black text-white w-full border border-gray-300 rounded`}
              type="password"
              placeholder="Confirm password"
            />
            <p className="text-red-400">{msg}</p>
            <center>
              <button
                className="hover:bg-red-800 rounded-2xl border-red-800 border-[1px] w-full text-white p-3 mt-10"
                type="submit"
              >
                <a href="/">{form}</a>
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
