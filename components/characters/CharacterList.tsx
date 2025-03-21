"use client";
import { Character } from "@/models/Types";
import CharacterCard from "./CharacterCard";
import Navigation from "../navigation";

interface ICharacterList {
  title: string;
  selectedId?: number;
  onSelect: (char: Character) => void;
  data: Character[];
  currentPage: number;
  totalPages: number;
  nextPage: () => false | Promise<void>;
  prevPage: () => false | Promise<void>;
}

const CharacterList = ({
  title,
  onSelect,
  selectedId,
  currentPage,
  data,
  nextPage,
  prevPage,
  totalPages,
}: ICharacterList) => {
  return (
    <div className="p-8 border-r-2 border-[#f7e14b]">
      <h2 className="text-3xl font-semibold text-[#f8f8f8] mb-4 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((char) => (
          <div key={char.id} onClick={() => onSelect(char)}>
            <CharacterCard character={char} selected={char.id === selectedId} />
          </div>
        ))}
      </div>

      <Navigation
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default CharacterList;
