import { Link } from "react-router-dom";
import { useState } from "react";
export function SignUp() {
  const [Data, SetData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    Age: 0,
  });
  return (
    <>
      <Link to={"/"}>
        <div className="back">{"<"}</div>
      </Link>
      <section className="SignIn">
        <h1>Sign UP</h1>
        <div>
          <div className="one"></div>
          <div className="two"></div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action="/signin"
          method="POST"
        >
          <div>
            <input
              type="text"
              id="Name"
              name="Name"
              required
              onChange={(e) => {
                SetData({ ...Data, UserName: e.target.value });
              }}
            />
            <label htmlFor="Name">Name:</label>
          </div>
          <div>
            <input
              type="number"
              id="Age"
              name="Age"
              required
              onChange={(e) => SetData({ ...Data, Age: e.target.value })}
            />
            <label htmlFor="Age">Age:</label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => {
                SetData({ ...Data, Email: e.target.value });
              }}
            />
            <label htmlFor="email">Email:</label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => {
                SetData({ ...Data, Password: e.target.value });
              }}
            />
            <label htmlFor="password">Password:</label>
          </div>
          <button
            onClick={() => {
              const Check =
                Data.UserName !== "" &&
                Data.Password !== "" &&
                Data.Email !== "" &&
                Data.Age >= 18 &&
                Data.Age <= 100;
            }}
            type="submit"
          >
            Create An Account
          </button>
        </form>
      </section>
    </>
  );
}
