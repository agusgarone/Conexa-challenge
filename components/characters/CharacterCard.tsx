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
    <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500">
      <Image
        className="w-full h-48 object-cover"
        width={200}
        height={200}
        src={character.image}
        alt={character.name}
      />

      <div className="px-4 py-3">
        <h3 className="font-bold text-lg text-gray-800">{character.name}</h3>

        <div className="flex items-center mt-2">
          <span
            className={`inline-block w-3 h-3 rounded-full mr-2 ${
              character.status === "Alive"
                ? "bg-green-400"
                : character.status === "Dead"
                ? "bg-red-400"
                : "bg-gray-400"
            }`}
          ></span>
          <span className="text-gray-600 text-sm">{character.status}</span>
        </div>

        <p className="mt-1 text-gray-500 text-sm">
          Species: {character.species}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
