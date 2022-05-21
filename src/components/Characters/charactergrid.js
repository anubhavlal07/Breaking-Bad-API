import React from "react";
import CharacterItem from "./characterItem";
import Spinner from "../UI/Spinner"
const charactergrid = ({ items, isLoading }) => {
  return isLoading ? (
     <Spinner/>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default charactergrid;
