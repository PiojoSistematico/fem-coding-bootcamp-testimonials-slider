import prevBtn from "./assets/images/icon-prev.svg";
import nextBtn from "./assets/images/icon-next.svg";
import quotes from "./assets/images/pattern-quotes.svg";
import curve from "./assets/images/pattern-curve.svg";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  console.log(data);

  return (
    <main>
      <picture>
        <img src={"../public/image-tanya.jpg"} alt="" />
        <div>
          <button>
            <img src={prevBtn} alt="" />
          </button>
          <button>
            <img src={nextBtn} alt="" />
          </button>
        </div>
      </picture>
      <section className="profile-section">
        <p>
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </p>
        <span className="profile-name">Tanya Sinclair</span>
        <span className="profile-title">UX Engineer</span>
        <img src={quotes} alt="" />
        <img src={curve} alt="" />
      </section>
    </main>
  );
}

export default App;
