import api from "@/utils/api";

export const getAllCharacters = (page?: number) =>
  api.get(`/character?page=${page ? page : 1}`);

export const getAllEpisodes = () => api.get("/episode");

export const getMultipleEpisodes = (episodes: string) =>
  api.get(`/episode/${episodes}`);
