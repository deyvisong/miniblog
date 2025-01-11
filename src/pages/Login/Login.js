import styles from "./Login.module.css";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useState, useEffect } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
    console.log(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={styles.login}>
      <h1>Sign In</h1>
      <p>Sign in to post</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="User E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!loading && <button className="btn">Sign In</button>}
        {loading && (
          <button className="btn" disabled>
            Logging in...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
