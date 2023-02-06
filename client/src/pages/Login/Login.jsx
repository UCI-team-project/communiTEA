import { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

// import { Button, Checkbox, Form, Input } from "antd";
import { Button } from "antd";
import style from "./login.module.css";
import { Link } from "react-router-dom";

import HeaderComponent from "../../Components/header";
import FooterComponent from "../../Components/footer/footer";

export default function Login() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [Login, { error, data }] = useMutation(LOGIN_USER);

  useEffect(() => {
    document.title = "CommuniTEA - Login";
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await Login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className={style.loginContainer}>
        <HeaderComponent />
      </div>

      {Auth.loggedIn() ? (
        <div className={style.container}>
          <p className={style.loadText}>
            <Link to="/">
              You are already logged in! Click here to head back to the
              homepage.
            </Link>
          </p>
        </div>
      ) : (
        <div className={style.container}>
          {data ? (
            <p className={style.loadText}>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <>
              <h1 className={style.title}>Login</h1>
              <p className={style.text}>
                Find the best boba in your area. Give them a review to help your
                fellow boba-nians in finding the best boba in the area. 😉
              </p>
              <form className={style.formContainer} onSubmit={handleFormSubmit}>
                <input
                  className={style.inputField}
                  type="text"
                  autoComplete="off"
                  name="username"
                  value={formState.username}
                  onChange={handleInputChange}
                  placeholder="Enter Username"
                />

                <input
                  className={style.inputField}
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
                <span className={style.btnContainer}>
                  <Button className={style.loginBtn} htmlType="submit" block>
                    Login
                  </Button>
                </span>
                <div className={style.alternativeOptionSection}>
                  <h4 className={style.altEl}>Don't have an account yet?</h4>
                  <Link to="/signup">
                    <Button className={style.signUpBtn}>Sign Up</Button>
                  </Link>
                </div>
              </form>
            </>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </div>
      )}
      <FooterComponent />
    </>
  );
}
