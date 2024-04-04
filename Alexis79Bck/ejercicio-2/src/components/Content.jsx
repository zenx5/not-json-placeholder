import { useEffect, useState } from "react";
import RedButton from "./RedButton";
import ImageCard from "./ImageCard";
//import Switch from "./Switch";

const TIMEINIT = 60

export default function Content() {
  
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(TIMEINIT)
  const [swToggle, setSwToggle] = useState(false)  
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
  

  const handlerChangeSw = function (e) {
      setSwToggle(e.target.checked)
  }
  
  useEffect(() => {
      if (count === 0 && swToggle) {
          handleClickRandomImage()
          return setCount(TIMEINIT);
      } 

      if (swToggle) {
          const id = setInterval(() => {
              setCount(prevCount => prevCount - 1)
            }, 1000)
        
            return () => clearInterval(id)
      }else{
          return setCount(TIMEINIT)
      }
  },[swToggle, count])



  const handleClickRandomImage = function () {
    let elementIndex = (Math.random() * categoria.length) | 0;
    fetch("https://api.waifu.pics/sfw/" + categoria[elementIndex])
      .then((response) => response.json())      
      .then((res) => setImage(res));
  };

  
  // const handleAutomaticRandomImage = function () {
  //   let elementIndex = (Math.random() * categoria.length) | 0;
  //   fetch("https://api.waifu.pics/sfw/" + categoria[elementIndex])
  //     .then((response) => response.json())      
  //     .then((res) => setImage(res));
  // };

  return (
    <>
    <div className="grid grid-flow-col h-screen w-full">
        <div className="bg-white ml-6 px-4">
          <div className="py-4">
            <RedButton type="button" onClick={handleClickRandomImage} />
          </div>

          <label className="inline-flex items-center cursor-pointer py-4">
            <input type="checkbox"  checked={swToggle}  className="sr-only peer" onChange={handlerChangeSw}  />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 ">Automatico (cambia en {count} segundos)</span>
          </label>

          {/* <Switch />           */}

        </div>
        <div className="p-4 bg-indigo-500 items-center ">
          
            <ImageCard image={image.url} />
          
        </div>
    </div>  
    </>
  );
}
