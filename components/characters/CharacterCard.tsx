import { Character } from "@/models/Types";
import Image from "next/image";
import React from "react";

const CharacterCard = ({
  character,
}: {
  character: Character;
  selected: boolean;
}) => {
  return (
    <div className="bg-[#41454d] w-full max-w-xs rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-[#01b4c6]">
      <Image
        className="w-full h-48 object-cover"
        width={200}
        height={200}
        src={character.image}
        alt={character.name}
      />

      <div className="px-4 py-3">
        <h3 className="font-bold text-lg text-[#f8f8f8]">{character.name}</h3>

        <div className="flex items-center mt-2">
          <span
            className={`inline-block w-3 h-3 rounded-full mr-2 ${
              character.status === "Alive"
                ? "bg-green-400"
                : character.status === "Dead"
                ? "bg-red-400"
                : "bg-[#f7e14b]"
            }`}
          ></span>
          <span
            className={`text-sm ${
              character.status === "Alive"
                ? "text-[#97ce4c]"
                : character.status === "Dead"
                ? "text-red-400"
                : "text-[#f7e14b]"
            }`}
          >
            {character.status}
          </span>
        </div>

        <p className="mt-1 text-[#f8f8f8] text-sm">
          Species: {character.species}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
