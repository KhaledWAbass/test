import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function LandingPage() {
  const ArrOfImg = [
    "/src/assets/img/hero_endframe__cvklg0xk3w6e_large 2.png",
    "/src/assets/img/pexels-828860-2587370.jpg",
    "/src/assets/img/pexels-karola-g-4202325.jpg",
    "/src/assets/img/pexels-pixabay-258244.jpg",
    "/src/assets/img/pexels-suzyhazelwood-2533266.jpg",
  ];
  const [CurrIdex, SetCurrIdex] = useState(0);
  useEffect(() => {
    const Interval = setInterval(() => {
      SetCurrIdex((p) => {
        const Next = (p + 1) % ArrOfImg.length;
        if (Next) {
          return Next;
        } else {
          SetCurrIdex(0);
        }
      });
    }, 10000);
    return () => clearInterval(Interval);
  }, [ArrOfImg.length]);
  return (
    <>
      <div
        className="landing"
        style={{ backgroundImage: `url(${ArrOfImg[CurrIdex]})` }}
      >
        <div className="overlay"></div>
        <div
          className="one"
          onClick={() => {
            const Prev = SetCurrIdex((p) => {
              const Prev = p - 1;
              if (Prev) {
                return Prev;
              } else {
                SetCurrIdex(0);
              }
            });
          }}
        >
          {"<"}
        </div>
        <div
          className="two"
          onClick={() => {
            SetCurrIdex((p) => {
              const Next = p + 1;
              if (Next) {
                return Next;
              } else {
                SetCurrIdex(0);
              }
            });
          }}
        >
          {">"}
        </div>
        <div className="info">
          <div className="text">our Products is the best to you</div>
          <Link to={""}>Shoping Now</Link>
        </div>
      </div>
    </>
  );
}
