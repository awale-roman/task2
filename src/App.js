import "./App.scss";

import { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { icons } from "./helper/helper";

function App() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (cardIndex) => {
    if (activeCard === cardIndex) return;

    const direction = cardIndex > activeCard ? "100%" : "-100%";
    const reverseDirection = cardIndex > activeCard ? "100%" : "-100%";

    gsap.to(`.card-${activeCard} .cards__icons`, {
      x: direction,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });

    gsap.to(`.card-${activeCard} .more-btn`, {
      x: direction,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveCard(cardIndex);

        gsap.fromTo(
          `.card-${cardIndex} .more-btn`,
          { x: reverseDirection, opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          }
        );

        gsap.fromTo(
          `.card-${cardIndex} .cards__icons`,
          { x: reverseDirection, opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          }
        );
      },
    });
  };

  useEffect(() => {
    gsap.to(".more-btn .arrow", {
      x: "-14px",
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <p className="text">Explore our classes and master trending skills!</p>
        <h3 className="title">
          Dive Into <span>What’s Hot Right Now!</span> 🔥
        </h3>
        <div className="cards__wrapper">
          {/* Primary Card */}
          <div
            className={`cards card-0 ${activeCard === 0 ? "active" : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <p className="more-btn">
              View all Courses{" "}
              <span className="arrow">
                <FaArrowRight />
              </span>
            </p>
            <div className="cards__icons">
              {icons.map((icon) => (
                <img
                  key={icon.name}
                  src={`/images/${icon.image}`}
                  alt={icon.name}
                />
              ))}
            </div>
            <div className="cards__info">
              <div className="counter">
                23<span>+</span>
              </div>
              <div>
                <p className="cards__title">All Courses</p>
                <p>courses you're powering through right now.</p>
              </div>
            </div>
          </div>

          {/* Secondary Card */}
          <div
            className={`cards card-1 ${activeCard === 1 ? "active" : ""}`}
            onClick={() => handleCardClick(1)}
          >
            <p className="more-btn">
              View all Courses{" "}
              <span className="arrow">
                <FaArrowRight />
              </span>
            </p>
            <div className="cards__icons">
              {icons.map((icon) => (
                <img
                  key={icon.name}
                  src={`/images/${icon.image}`}
                  alt={icon.name}
                />
              ))}
            </div>
            <div className="cards__info">
              <div className="counter">
                05<span>+</span>
              </div>
              <div>
                <p className="cards__title">Upcoming Courses</p>
                <p>Courses you're excited to take next.</p>
              </div>
            </div>
          </div>

          {/* Tertiary Card */}
          <div
            className={`cards card-2 ${activeCard === 2 ? "active" : ""}`}
            onClick={() => handleCardClick(2)}
          >
            <p className="more-btn">
              View all Courses{" "}
              <span className="arrow">
                <FaArrowRight />
              </span>
            </p>
            <div className="cards__icons">
              {icons.map((icon) => (
                <img
                  key={icon.name}
                  src={`/images/${icon.image}`}
                  alt={icon.name}
                />
              ))}
            </div>
            <div className="cards__info">
              <div className="counter">
                10<span>+</span>
              </div>
              <div>
                <p className="cards__title">Ongoing Courses</p>
                <p>currently happening—don’t miss out on the action!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
