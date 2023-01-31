import React from "react";
// import { ReactionBarSelector } from "@charkour/react-reactions";
import { PokemonSelector } from "@charkour/react-reactions";
import { PokemonCounter } from "@charkour/react-reactions";

const ReactionBar = () => {
  return (
    <>
      {/* <ReactionBarSelector /> */}
      <PokemonSelector />
      <PokemonCounter />
    </>
  );
};

export default ReactionBar;
