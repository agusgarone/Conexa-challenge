"use client";
import React, { useState } from "react";
import CharacterList from "@/components/characters/CharacterList";
import { Character } from "@/models/Types";
import EpisodeList from "@/components/episodes/EpisodeList";
import useEpisodes from "@/hooks/useEpisodes";

export default function Home() {
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
    <div className="p-8 bg-[#202329]">
      <div className="grid grid-cols-2 gap-8">
        <CharacterList
          selectedId={selectedCharacter1?.id}
          onSelect={setSelectedCharacter1}
        />

        <CharacterList
          selectedId={selectedCharacter2?.id}
          onSelect={setSelectedCharacter2}
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
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
