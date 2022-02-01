import React from "react";
import { Card } from "../shared/Card";

export const BlogsList = () => {
  const entries = [
    {
      id: "1",
      title: "Big data",
      img: "https://elordenmundial.com/wp-content/uploads/2020/02/27774352598_ed9cfff30a_c.jpg",
      description: "¿Que es Big data?",
      date: "01-02-2022",
      route: "/blogs/que-es-big-data",
      category: "blog",
    },
    {
      id: "2",
      title: "The Office API",
      img: "https://elordenmundial.com/wp-content/uploads/2020/02/27774352598_ed9cfff30a_c.jpg",
      description: "API about characters and phrases of the office.",
      date: "30-01-2022",
      route: "/blogs/test",
    },
  ];

  return (
    <div>
      {entries.map((entry) => (
        <Card key={entry.id} {...entry} />
      ))}
    </div>
  );
};

//TODO
/*
    nav to selected blog

    --future--
    create a service to get info for cards
    how to manage images
*/
