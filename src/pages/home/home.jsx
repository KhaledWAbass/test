import { Header } from "./header/header";
import { LandingPage } from "./body/landing";
export function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <LandingPage />
      </div>
    </>
  );
}
