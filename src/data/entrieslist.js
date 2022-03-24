/* 
Categories=blog, app, doc, tutorial,other
*/
export const entriesList = [
  {
    id: "6",
    title: "Recipes App",
    img: "https://live.staticflickr.com/65535/51957806642_944f49fc30_c.jpg",
    description:
      "Aplicacion realizada en React para compartir y consultar recetas de cocina",
    date: "24-03-2022",
    route: "https://recipes-carlos.netlify.app/",
    category: "app",
  },
  {
    id: "5",
    title: "Pokedex",
    img: "https://live.staticflickr.com/65535/51939040565_af3d21cda0_c.jpg",
    description: "Aplicacion realizada en Next.Js",
    date: "14-03-2022",
    route: "https://pokedex-carlos-valencia.vercel.app/",
    category: "app",
  },
  {
    id: "4",
    title: "Citar en APA",
    img: "https://live.staticflickr.com/65535/51902469364_c8864c8e3a_c.jpg",
    description: "Aplicacion para citar en formato APA",
    date: "24-02-2022",
    route: "/apps/apa",
    category: "app",
  },
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
  {
    id: "3",
    title: "About",
    img: "https://live.staticflickr.com/65535/51902190659_7f48b2bd6d_c.jpg",
    description: "Acerca de esta página",
    date: "5-01-2022",
    route: "/about",
    category: "other",
  },
];

export const getBlogs = () => {
  return entriesList.filter((entry) => entry.category === "blog");
};

export const getApps = () => {
  return entriesList.filter((entry) => entry.category === "app");
};

export const getAll = () => {
  return entriesList;
};
