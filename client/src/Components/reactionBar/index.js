import { React, useState } from "react";
// import { ReactionBarSelector } from "@charkour/react-reactions";
import { PokemonSelector } from "@charkour/react-reactions";
import { PokemonCounter } from "@charkour/react-reactions";

export default function ReactionBar() {
  // let reaction = {
  //   like: 0,
  //   love: 0,
  //   haha: 0,
  //   wow: 0,
  //   sad: 0,
  //   angry: 0,
  // };

  // const handleReaction = async (event) => {
  //   switch (event) {
  //     case "like":
  //       reaction.like = reaction.like + 1;
  //       console.log(reaction);
  //       break;
  //     case "love":
  //       reaction.love = reaction.love + 1;
  //       console.log(reaction);
  //       break;
  //     case "haha":
  //       reaction.haha = reaction.haha + 1;
  //       console.log(reaction);
  //       break;
  //     case "wow":
  //       reaction.wow = reaction.wow + 1;
  //       console.log(reaction);
  //       break;
  //     case "sad":
  //       reaction.sad = reaction.sad + 1;
  //       console.log(reaction);
  //       break;
  //     case "angry":
  //       reaction.angry = reaction.angry + 1;
  //       console.log(reaction);
  //       break;
  //   }
  // };

  const [reaction, setReaction] = useState("");
  function handleReaction(event) {
    setReaction(event);
    console.log("Selected", event);
    // for some reason reaction console log doesn't update right away but setReaction is working correctly here, not a big issue
    console.log(reaction);
  }

  return (
    <>
      {/* <ReactionBarSelector /> */}
      <PokemonSelector onSelect={handleReaction} />
      {/* <PokemonSelector /> */}
      <PokemonCounter />
    </>
  );
}
