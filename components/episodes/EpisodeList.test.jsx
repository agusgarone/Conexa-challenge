import { render, screen } from "@testing-library/react";
import EpisodeList from "./EpisodeList";

const mockEpisodes = [
  {
    id: 1,
    name: "Episode 1",
    air_date: "11-09-2014",
    episode: "S01E01",
    characters: ["Rick", "Morty"],
    url: "www.prueba.com",
    created: "01-01-2009",
  },
  {
    id: 2,
    name: "Episode 3",
    air_date: "28-07-2014",
    episode: "S01E03",
    characters: ["Rick", "Morty"],
    url: "www.prueba.com",
    created: "01-01-2019",
  },
  {
    id: 3,
    name: "Episode 19",
    air_date: "01-12-2014",
    episode: "S01E19",
    characters: ["Rick", "Morty"],
    url: "www.prueba.com",
    created: "01-01-2015",
  },
];

describe("Episode List Component", () => {
  beforeEach(() => {
    render(<EpisodeList title="Test Episodes" episodes={mockEpisodes} />);
  });

  it("renders the title correctly", () => {
    expect(screen.getByText("Test Episodes")).toBeInTheDocument();
  });
  it("renders all provided episodes correctly", () => {
    mockEpisodes.forEach((episode) => {
      const episodeText = `${episode.episode}`;
      expect(screen.getByText(episodeText)).toBeInTheDocument();
      const episodeName = `: ${episode.name}`;
      expect(screen.getByText(episodeName)).toBeInTheDocument();

      const airDateText = `(${episode.air_date})`;
      expect(screen.getByText(airDateText)).toBeInTheDocument();
    });
  });

  it("does not render pagination when episodes <= 6", () => {
    expect(screen.queryByText("Previous")).not.toBeInTheDocument();
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });
});
