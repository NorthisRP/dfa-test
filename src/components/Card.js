import React from "react";
import "../styles/myStructure.style.scss";
import "../styles/global.style.scss";
import avatar from "../assets/images/avatar.png";

export default function Card({ id, quantity }) {
  const generateData = () => {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push(
        <div key={i} className="row">
          <img src={avatar} alt="avatar" />
          <p>kris_anfalova</p>
        </div>
      );
    }
    return data;
  };

  return (
    <div className="card">
      <div className="card--title row">
        <p>{id}</p>
        <p>{quantity}</p>
      </div>
      <div className="card--subtitle row">
        <p>Уровень выплат</p>
        <p>Активных партнеров</p>
      </div>
      <div className="card--content">{generateData()}</div>
    </div>
  );
}
