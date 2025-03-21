"use client";
import React, { useState } from "react";
import CharacterList from "@/components/characters/CharacterList";
import { Character } from "@/models/Types";
import EpisodeList from "@/components/episodes/EpisodeList";
import useEpisodes from "@/hooks/useEpisodes";
import usePagination from "@/hooks/usePagination";
import { getAllCharacters } from "@/services/rickAndMorty";

export default function Home() {
  const {
    data: charactersDataList1,
    currentPage: currentPageList1,
    totalPages: totalPagesList1,
    nextPage: nextPageList1,
    prevPage: prevPageList1,
  } = usePagination(getAllCharacters);

  const {
    data: charactersDataList2,
    currentPage: currentPageList2,
    totalPages: totalPagesList2,
    nextPage: nextPageList2,
    prevPage: prevPageList2,
  } = usePagination(getAllCharacters);

  const [selectedCharacter1, setSelectedCharacter1] = useState<
    Character | undefined
  >(undefined);
  const [selectedCharacter2, setSelectedCharacter2] = useState<
    Character | undefined
  >(undefined);

  const { sharedEpisodes, onlyEpisodes1, onlyEpisodes2 } = useEpisodes({
    character1: selectedCharacter1,
    character2: selectedCharacter2,
  });

  return (
    <div className="bg-[#202329]">
      <div className="grid grid-cols-2">
        <CharacterList
          title="Character List N°1"
          selectedId={selectedCharacter1?.id}
          onSelect={setSelectedCharacter1}
          data={charactersDataList1}
          currentPage={currentPageList1}
          totalPages={totalPagesList1}
          nextPage={nextPageList1}
          prevPage={prevPageList1}
        />

        <CharacterList
          title="Character List N°2"
          selectedId={selectedCharacter2?.id}
          onSelect={setSelectedCharacter2}
          data={charactersDataList2}
          currentPage={currentPageList2}
          totalPages={totalPagesList2}
          nextPage={nextPageList2}
          prevPage={prevPageList2}
        />
      </div>
      <div className="border-t-2 border-[#f7e14b] grid grid-cols-3 gap-3 h-[525px]">
        <EpisodeList
          episodes={onlyEpisodes1}
          title="Character #1 - Only Episodes"
        />
        <EpisodeList episodes={sharedEpisodes} title="Shared Episodes" />
        <EpisodeList
          episodes={onlyEpisodes2}
          title="Character #2 - Only Episodes"
        />
      </div>
    </div>
  );
}
