import React from "react";
import Banner from "../ui/Banner";
import CategorySection from "../ui/CategorySection";
import SectionProduct from "../ui/SectionProduct";

const categories = [
  {
    image: `/categoryw5.png`,
    title: "Clothing",
    description: "Hoodies, tees, jackets, shorts and more...",
    link: "clothing",
  },
  {
    image: `/categoryw2.png`,
    title: "Jackets",
    description: "Stay warm with a huge range of fleeces, jackets & coats",
    link: "jackets",
  },
  {
    image: `/categoryw1.png`,
    title: "Shoes",
    description: "Vans, New Balance, Dr Marten's, Birkenstock & more!",
    link: "footwear",
  },
  {
    image: `/categoryw3.png`,
    title: "Accessories",
    description: "The finishing touches of all the accessories",
    link: "accessories",
  },
  {
    image: `/categoryw4.png`,
    title: "Jeans",
    description: "Stylish and comfortable jeans for every occasion.",
    link: "jeans",
  },
];

function Womens() {
  return (
    <>
      <Banner imageUrl={`/womenbanner.jpg`} title="womens" />
      <CategorySection categories={categories} />
      <SectionProduct category="womens" mainCategory="clothing" />
      <SectionProduct category="womens" mainCategory="jackets" />
      <SectionProduct category="womens" mainCategory="footwear" />
      <SectionProduct category="womens" mainCategory="accessories" />
      <SectionProduct category="womens" mainCategory="jeans" />
    </>
  );
}

export default Womens;
