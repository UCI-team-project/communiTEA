import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [Login, { error, data }] = useMutation(LOGIN_USER);

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
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login User</button>
      </form>
    </div>
  );
}

export default Login;
