import { Episode } from "@/models/Types";

interface IEpisodeList {
  episodes: Episode[];
  title: string;
}

const EpisodeList = ({ episodes, title }: IEpisodeList) => {
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      {episodes.length > 0 ? (
        <ul className="space-y-2">
          {episodes.map((episode) => (
            <li key={episode.id} className="p-3 rounded bg-gray-100 shadow-sm">
              <strong>{episode.episode}</strong>: {episode.name}{" "}
              <span className="text-sm text-gray-600">
                ({episode.air_date})
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No episodes to show.</p>
      )}
    </div>
  );
};

export default EpisodeList;
