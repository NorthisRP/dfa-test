import React from "react";
import "../styles/global.style.scss";
import { ReactComponent as Home } from "../assets/vectors/home.svg";
import { ReactComponent as Activity } from "../assets/vectors/activity.svg";
import { ReactComponent as Blogers } from "../assets/vectors/blogers.svg";
import { ReactComponent as Landings } from "../assets/vectors/landings.svg";
import { ReactComponent as Marafon } from "../assets/vectors/marafon.svg";
import { ReactComponent as Piar } from "../assets/vectors/piar.svg";
import { ReactComponent as Store } from "../assets/vectors/store.svg";
import { ReactComponent as Structure } from "../assets/vectors/structure.svg";

export default function Panel() {
  return (
    <div className="panel">
      <div className="link">
        <Home />
        <p>Дашборд</p>
      </div>
      <div className="link">
        <Activity />
        <p>Биржа активности</p>
      </div>
      <div className="link">
        <Blogers />
        <p>Биржа блогеров</p>
      </div>
      <div className="link">
        <Piar />
        <p>Взаимопиар</p>
      </div>
      <div className="link active">
        <Structure />
        <p>Моя структура</p>
      </div>
      <div className="link">
        <Store />
        <p>Магазин</p>
      </div>
      <div className="link">
        <Marafon />
        <p>Марафон</p>
      </div>
      <div className="link">
        <Landings />
        <p>Лендинги</p>
      </div>
    </div>
  );
}
