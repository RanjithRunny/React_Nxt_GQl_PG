import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

/**
 * GraphQL mutation for registering a new user.
 */
const ADD_REGISTER = gql`
  mutation ($userName: String!, $password: String!) {
    addRegister(userName: $userName, password: $password) {
      userName
      password
      createdAt
    }
  }
`;

/**
 * Register component for user registration.
 * Handles form state, input changes, and form submission.
 */
const Register = () => {
  // Mutation hook for registering a user
  const [addRegister] = useMutation(ADD_REGISTER);

  // State for registration form fields
  const [regDetails, setRegDetails] = useState({
    userName: "",
    password: ""
  });

  /**
   * Handles form submission to register a new user.
   * @param {React.FormEvent<HTMLFormElement>} e - Form submit event
   */
  const handleRegister = async (e) => {
    e.preventDefault();
    await addRegister({ variables: { ...regDetails } });
    setRegDetails({ userName: "", password: "" }); // Reset form after submit
  };

  /**
   * Handles input changes and updates the registration state.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Email
        <input
          type="text"
          placeholder="userName"
          name="userName"
          value={regDetails.userName}
          onChange={handleChange}
          autoComplete="username"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="password"
          name="password"
          value={regDetails.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
