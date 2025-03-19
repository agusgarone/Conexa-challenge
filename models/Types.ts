export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Basic;
  location: Basic;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Basic = {
  name: string;
  url: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
