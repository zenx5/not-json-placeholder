import { useState } from "react";
import RedButton from "./RedButton";
import ImageCard from "./ImageCard";

export default function Content() {
  const [image, setImage] = useState([]);
  const categoria = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "hug",
    "awoo",
    "kiss",
    "lick",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe",
  ];

  const handleClick = function () {
    let elementIndex = (Math.random() * categoria.length) | 0;
    fetch("https://api.waifu.pics/sfw/" + categoria[elementIndex])
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setImage(res);
        console.log(res);
      });
  };

  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <div className="mb-12">
        <RedButton type="button" onClick={handleClick} />
      </div>
      <div className="bg-indigo-500 p-4 h-screen-1/2 w-1/2">
        <ImageCard image={image.url} />
      </div>
    </div>
  );
}
