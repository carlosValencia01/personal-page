import React from "react";
import { Card } from "../shared/Card";
import { getBlogs } from "../../data/entrieslist";

export const BlogsList = () => {
  const entries = getBlogs();

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
