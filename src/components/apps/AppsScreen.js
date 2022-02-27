import React from "react";
import { getApps } from "../../data/entrieslist";
import { Card } from "../shared/Card";

export const AppsScreen = () => {
  const entries = getApps();
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
