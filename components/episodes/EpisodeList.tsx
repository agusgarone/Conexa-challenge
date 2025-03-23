import { Episode } from "@/models/Types";
import Navigation from "../navigation";
import useLocalPagination from "@/hooks/useLocalPagination";

interface IEpisodeList {
  episodes: Episode[];
  title: string;
}

const EpisodeList = ({ episodes, title }: IEpisodeList) => {
  const { currentPage, totalPages, nextPage, prevPage, paginatedData } =
    useLocalPagination(episodes);

  return (
    <div className="flex flex-col p-8">
      <h2 className="text-xl font-semibold mb-4 text-[#f8f8f8] text-center">
        {title}
      </h2>

      {episodes.length > 0 ? (
        <>
          <ul className="space-y-2">
            {paginatedData.map((episode) => (
              <li
                key={episode.id}
                className="p-3 rounded bg-[#f7e14b] shadow-sm"
              >
                <strong>{episode.episode}</strong>: {episode.name}{" "}
                <span className="text-sm text-gray-600">
                  ({episode.air_date})
                </span>
              </li>
            ))}
          </ul>
          {episodes.length > 6 && (
            <Navigation
              currentPage={currentPage}
              totalPages={totalPages}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          )}
        </>
      ) : (
        <p className="text-sm text-gray-400">No episodes to show.</p>
      )}
    </div>
  );
};

export default EpisodeList;
