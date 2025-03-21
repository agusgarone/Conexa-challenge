"use client";
import { Character } from "@/models/Types";
import CharacterCard from "./CharacterCard";
import usePagination from "@/hooks/usePagination";
import { getAllCharacters } from "@/services/rickAndMorty";

interface ICharacterList {
  selectedId?: number;
  onSelect: (char: Character) => void;
}

const CharacterList = ({ onSelect, selectedId }: ICharacterList) => {
  const {
    data: charactersData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
  } = usePagination(getAllCharacters);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {charactersData?.map((char) => (
          <div key={char.id} onClick={() => onSelect(char)}>
            <CharacterCard character={char} selected={char.id === selectedId} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 my-6">
        <button
          onClick={prevPage}
          disabled={currentPage <= 1}
          className={`px-4 py-2 rounded-lg font-medium ${
            currentPage <= 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Previous
        </button>

        <span className="font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages}
          className={`px-4 py-2 rounded-lg font-medium ${
            currentPage >= totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
