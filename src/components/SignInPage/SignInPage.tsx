import React, { useState } from "react";
import styles from "./SignInPage.module.css";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/apiService";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    try {
      const response = await signIn({ email, password });
      const { token } = response.data;
      localStorage.setItem("token", token);
      alert("Sign-In Successful!");
      navigate("/application");
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign-In Failed.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
