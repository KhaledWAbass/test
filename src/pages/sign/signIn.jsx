import { Link } from "react-router-dom";
import { useState } from "react";
export function SignIn() {
  const [Email, SetEmail] = useState("");
  const [Pass, SetPass] = useState("");
  return (
    <>
      <Link to={"/"}>
        <div className="back">{"<"}</div>
      </Link>
      <section className="SignIn">
        <h1>Sign In</h1>
        <div>
          <div className="one"></div>
          <div className="two"></div>
        </div>
        <form action="/signin" method="POST">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => {
                SetPass(e.target.value);
              }}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </>
  );
}
