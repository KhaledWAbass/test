import { Header } from "./header/header";
import { LandingPage } from "./body/landing";
import { Detail } from "./body/details";
import { Category } from "./body/category";
export function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <LandingPage />
        <Category />
        <Detail />
      </div>
    </>
  );
}
