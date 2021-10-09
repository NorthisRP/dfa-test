import React, { useRef } from "react";
import Card from "../components/Card";
import "../styles/myStructure.style.scss";
import "../styles/global.style.scss";

export default function MyStructure() {
  const data = useRef([
    { quantity: 133 },
    { quantity: 129 },
    { quantity: 5455 },
    { quantity: 4500 },
    { quantity: 43233 },
    { quantity: 4500 },
    { quantity: 43233 },
    { quantity: 133 },
    { quantity: 129 },
    { quantity: 5455 },
    { quantity: 4500 },
    { quantity: 43233 },
    { quantity: 4500 },
    { quantity: 43233 },
  ]);

  return (
    <div className="content">
      <div>
        <h1 className="title">Моя структура</h1>
      </div>
      <div className="cards">
        {data.current.map((card, id) => (
          <Card key={id} id={id + 1} quantity={card.quantity} />
        ))}
      </div>
    </div>
  );
}
