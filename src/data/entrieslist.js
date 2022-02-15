/* 
Categories=blog, app, doc, tutorial
*/

export const entriesList = [
  {
    id: "2",
    title: "NFT ¿Que es y como funciona?",
    img: "https://live.staticflickr.com/65535/51884255769_770184740a_b.jpg",
    description:
      "Entendamos de una vez por todas que es un NFT y como funciona.",
    date: "15-02-2022",
    route: "/blogs/que-es-nft",
    category: "blog",
  },
  {
    id: "1",
    title: "Big data",
    img: "https://live.staticflickr.com/65535/51883936756_3049eac5f0_c.jpg",
    description: "¿Que es Big data?",
    date: "01-02-2022",
    route: "/blogs/que-es-big-data",
    category: "blog",
  },
];

export const getBlogs = () => {
  return entriesList.filter((entry) => entry.category === "blog");
};
