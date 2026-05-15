import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
export function Header() {
  const Logo = "Flash Tag";
  const [activeLink, setActiveLink] = useState(0);
  const Links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/src/pages/about" },
    { name: "Contact", url: "/src/pages/contact" },
    { name: "All Products", url: "/products" },
    { name: "signin", url: "/src/pages/sign/signIn" },
    { name: "signup", url: "/src/pages/sign/signUp" },
  ];
  return (
    <>
      <header>
        <nav>
          <h1>{Logo}</h1>
          {window.innerWidth <= 768 ? (
            <>
              <span> |</span>
            </>
          ) : null}
          {window.innerWidth <= 991 ? null : (
            <>
              <span> |</span>
            </>
          )}
          <ul>
            {Links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.url}
                  className={activeLink === index ? "active" : ""}
                  onClick={() => setActiveLink(index)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="search">
          <input type="search" placeholder="Search..." />
          <i id="heart-icon" className="fa-solid fa-heart"></i>
          <Link to="/cart">
            <i id="cart-icon" className="fa-solid fa-bag-shopping"></i>
          </Link>
        </div>
      </header>
    </>
  );
}
