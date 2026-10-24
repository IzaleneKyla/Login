
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setError("");
  }, []);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!/^[^\s@]+@gmail\.com$/i.test(email.trim())) {
      setError("Please use a valid @gmail.com email.");
      return;
    }

    if (password.length <= 6) {
      setError("Password must be more than 6 characters.");
      return;
    }

    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("userEmail", email.trim());

    setEmail("");
    setPassword("");
    router.push("/dashboard");
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="star">✦</div>

        <p className="eyebrow">A LITTLE SPACE FOR YOU</p>

        <h1>
          Welcome back<span>!</span>
        </h1>

        <p className="subtitle">
          It&apos;s nice to see you again.
        </p>

        <form onSubmit={handleLogin} noValidate>
          <input
            aria-label="Email address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />

          <div className="password-wrapper">
            <input
              aria-label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />

            <button
            className="password-toggle"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            title={showPassword ? "Hide password" : "Show password"}
            >
          {showPassword ? "◉" : "◎"}
          </button>
          </div>

          <button className="login-button" type="submit">
            Login <span>→</span>
          </button>

          {error && (
            <p className="error-message" role="alert">
              ✦ {error}
            </p>
          )}
        </form>

        <div className="login-footer">
          Made with a little sparkle ✦
        </div>
      </section>
    </main>
  );
}
