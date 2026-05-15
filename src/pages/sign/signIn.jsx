import { Link } from "react-router-dom";
export function SignIn() {
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
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </>
  );
}
