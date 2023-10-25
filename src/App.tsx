import prevBtn from "./assets/images/icon-prev.svg";
import nextBtn from "./assets/images/icon-next.svg";
import quotes from "./assets/images/pattern-quotes.svg";
import curve from "./assets/images/pattern-curve.svg";
import { useEffect, useState } from "react";

type dataProps = {
  name: string;
  quote: string;
  title: string;
  image: string;
};

function App() {
  const [data, setData] = useState<dataProps[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  function handleIncrease(): void {
    setIndex((v) => (v == data.length - 1 ? 0 : v + 1));
  }
  function handleDecrease(): void {
    setIndex((v) => (v == 0 ? data.length - 1 : v - 1));
  }

  return (
    <>
      {data.length > 0 ? (
        <main>
          <section className="hero-section">
            <img src={data[index].image} alt="" className="avatar" />
            <div className="btn-slider">
              <button onClick={handleDecrease}>
                <img src={prevBtn} alt="" />
              </button>
              <button onClick={handleIncrease}>
                <img src={nextBtn} alt="" />
              </button>
            </div>
          </section>
          <section className="profile-section">
            <p>{data[index].quote}</p>
            <div className="flex">
              <h1 className="profile-name">{data[index].name}</h1>
              <h2 className="profile-title">{data[index].title}</h2>
            </div>

            <img src={quotes} alt="" className="quotes" />
          </section>
          <img src={curve} alt="" className="bg-curve" />
        </main>
      ) : (
        <main>
          <h1>Error</h1>
        </main>
      )}
    </>
  );
}

export default App;
