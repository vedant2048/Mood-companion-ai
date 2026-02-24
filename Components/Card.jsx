import React from "react";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  return (
    <div className="cardholder flex w-full justify-evenly text-white mt-10 flex-wrap gap-6 ">

      <div onClick={() => navigate("/mood/Angry")} className="cards h-80 w-80 bg-zinc-800 rounded-3xl text-4xl flex justify-center items-center shadow-lg ring-2 ring-white/20 hover:scale-105 transition cursor-pointer hover:bg-red-700">
        Angry
      </div>

      <div onClick={() => navigate("/mood/Happy")}className="cards h-80 w-80 bg-zinc-800 rounded-3xl text-4xl flex justify-center items-center shadow-lg ring-2 ring-white/20 hover:scale-105 transition cursor-pointer hover:bg-blue-700">
        Happy
      </div>

      <div onClick={() => navigate("/mood/lazy")}className="cards h-80 w-80 bg-zinc-800 rounded-3xl text-4xl flex justify-center items-center shadow-lg ring-2 ring-white/20 hover:scale-105 transition cursor-pointer hover:bg-stone-600">
        Lazy
      </div>

      <div onClick={() => navigate("/mood/sad")}className="cards h-80 w-80 bg-zinc-800 rounded-3xl text-4xl flex justify-center items-center shadow-lg ring-2 ring-white/20 hover:scale-105 transition cursor-pointer hover:bg-violet-500">
        Sad
      </div>

    </div>
  );
}

export default Card;