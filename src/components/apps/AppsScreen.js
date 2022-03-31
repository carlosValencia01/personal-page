import React from "react";
import { getApps } from "../../data/entrieslist";
import { CardShared } from "../shared/CardShared";

export const AppsScreen = () => {
  const entries = getApps();
  return (
    <div className="list__main">
      <div className="list__grid">
        {entries.map((entry) => (
          <CardShared key={entry.id} {...entry} />
        ))}
      </div>
    </div>
  );
};
