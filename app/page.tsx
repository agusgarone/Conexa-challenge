"use client";
import React, { useEffect, useState } from "react";
import CharacterList from "@/components/characters/CharacterList";
// import usePagination from "@/hooks/usePagination";
import { getAllCharacters } from "@/services/rickAndMorty";
import { Character } from "@/models/Types";
import EpisodeList from "@/components/episodes/EpisodeList";
import useEpisodes from "@/hooks/useEpisodes";

export default function Home() {
  // const {
  //   data: characters,
  //   currentPage,
  //   totalPages,
  //   loading,
  //   nextPage,
  //   prevPage,
  // } = usePagination(getAllCharacters);

  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter1, setSelectedCharacter1] = useState<
    Character | undefined
  >(undefined);
  const [selectedCharacter2, setSelectedCharacter2] = useState<
    Character | undefined
  >(undefined);

  useEffect(() => {
    getAllCharacters().then((data) => {
      console.log("data", data.data);
      setCharacters(data?.data?.results);
    });
  }, []);

  const { sharedEpisodes } = useEpisodes({
    character1: selectedCharacter1,
    character2: selectedCharacter2,
  });

  useEffect(() => {
    console.log("sharedEpisodes", sharedEpisodes);
  }, [sharedEpisodes]);

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 gap-8">
        <CharacterList
          title="Character #1"
          characters={characters}
          selectedId={selectedCharacter1?.id}
          onSelect={setSelectedCharacter1}
        />

        <CharacterList
          title="Character #2"
          characters={characters}
          selectedId={selectedCharacter2?.id}
          onSelect={setSelectedCharacter2}
        />
      </div>

      {selectedCharacter1 && selectedCharacter2 && (
        <div className="grid grid-cols-3 gap-3">
          <EpisodeList episodes={[]} title="Character #1 - Only Episodes" />
          <EpisodeList episodes={[]} title="Shared Episodes" />
          <EpisodeList episodes={[]} title="Character #2 - Only Episodes" />
        </div>
      )}
    </div>
  );
}
