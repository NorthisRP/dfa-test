import React from "react";
import "../styles/global.style.scss";
import { ReactComponent as Exit } from "../assets/vectors/exit.svg";

export default function Header() {
  return (
    <header>
      <div>
        <p>Мероприятия</p>
      </div>
      <div className="link">
        <p>Выход</p>
        <Exit />
      </div>
    </header>
  );
}
