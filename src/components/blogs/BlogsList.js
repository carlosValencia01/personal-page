import React from "react";
import { CardShared } from "../shared/CardShared";
import { getBlogs } from "../../data/entrieslist";

export const BlogsList = () => {
  const entries = getBlogs();

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
