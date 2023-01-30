import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await register({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
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
        <button type="submit">Register User</button>
      </form>
    </div>
  );
}

export default Register;
