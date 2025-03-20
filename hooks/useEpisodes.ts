import { Character, Episode } from "@/models/Types";
import { getMultipleEpisodes } from "@/services/rickAndMorty";
import { useEffect, useState } from "react";

interface IUseEpisodes {
  character1?: Character;
  character2?: Character;
}

const useEpisodes = ({ character1, character2 }: IUseEpisodes) => {
  const [onlyEpisodes1, setOnlyEpisodes1] = useState<Episode[]>([]);
  const [onlyEpisodes2, setOnlyEpisodes2] = useState<Episode[]>([]);
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    async function fetchEpisodes() {
      if (!character1 || !character2) {
        setOnlyEpisodes1([]);
        setOnlyEpisodes2([]);
        setSharedEpisodes([]);
        return;
      }

      const episodes1 = new Set(character1.episode);
      const episodes2 = new Set(character2.episode);

      const shared = [...episodes1].filter((ep) => episodes2.has(ep));
      const only1 = [...episodes1].filter((ep) => !episodes2.has(ep));
      const only2 = [...episodes2].filter((ep) => !episodes1.has(ep));

      const fetchDetails = async (urls: string[]) => {
        let episodes = "";
        urls.forEach((url, index) => {
          const id = url.split("/").pop();
          episodes += index === urls.length - 1 ? `${id}` : `${id},`;
        });
        return getMultipleEpisodes(episodes).then((response) => response);
      };
      const responseSharedEp = await fetchDetails(shared);
      const responseOnly1 = await fetchDetails(only1);
      const responseOnly2 = await fetchDetails(only2);
      setSharedEpisodes(responseSharedEp.data);
      setOnlyEpisodes1(responseOnly1.data);
      setOnlyEpisodes2(responseOnly2.data);
    }

    fetchEpisodes();
  }, [character1, character2]);

  return { onlyEpisodes1, onlyEpisodes2, sharedEpisodes };
};

export default useEpisodes;
