import { Character } from "@/models/Types";
import CharacterCard from "./CharacterCard";

interface ICharacterList {
  characters: Character[];
  title: string;
  selectedId?: number;
  onSelect: (char: Character) => void;
}

const CharacterList = ({
  characters,
  onSelect,
  selectedId,
  title,
}: ICharacterList) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters?.map((char) => (
          <div key={char.id} onClick={() => onSelect(char)}>
            <CharacterCard character={char} selected={char.id === selectedId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
