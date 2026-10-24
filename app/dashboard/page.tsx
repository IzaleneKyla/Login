
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
      router.replace("/");
      return;
    }

    setEmail(sessionStorage.getItem("userEmail") || "");
  }, [router]);

  function handleLogout() {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("userEmail");

    router.replace("/");
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-card">
        <div className="star">✦</div>

        <p className="eyebrow">LOGIN SUCCESSFUL</p>

        <h1>
          Hello, welcome in<span>!</span>
        </h1>

        <p className="subtitle">
          You have successfully logged in.
        </p>

        <div className="account-box">
          <span>Signed in as</span>
          <strong>{email}</strong>
        </div>

        <button
          className="login-button"
          onClick={handleLogout}
        >
          Logout <span>↗</span>
        </button>

        <div className="login-footer">
          See you again soon ✦
        </div>
      </section>
    </main>
  );
}
