import React from "react";
import { BuildingScreen } from "../BuildingScreen";
import { Card } from "../shared/Card";
import imagen from "../../assets/images/background1.jpg";

export const ApisScreen = () => {
  const entries = [
    {
      id: "1",
      title: "F1 API",
      img: imagen,
      description: "API about F1 interesting data",
      date: "25-01-2022",
      route: "no-route-yet",
    },
    {
      id: "2",
      title: "The Office API",
      img: imagen,
      description: "API about characters and phrases of the office.",
      date: "30-01-2022",
      route: "no-route-yet",
    },
  ];

  return (
    <div>
      <h2>Apis home screen</h2>
      <hr />

      {entries.map((entry) => (
        <Card key={entry.id} {...entry} />
      ))}
    </div>
  );
};
