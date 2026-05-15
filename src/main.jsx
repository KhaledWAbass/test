import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
import { NotFound } from "./pages/notFound.jsx";
import { BrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/sign/signIn.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/src/pages/sign/signIn" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  </StrictMode>,
);
