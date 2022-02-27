import React from "react";
import { getAll } from "../../data/entrieslist";
import { Card } from "../shared/Card";

export const HomeScreen = () => {
  const entries = getAll();
  return (
    <div className="list__main">
      <div className="list__grid">
        {entries.map((entry) => (
          <Card key={entry.id} {...entry} />
        ))}
      </div>
    </div>
  );
};
