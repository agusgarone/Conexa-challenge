import api from "@/utils/api";

export const getAllCharacters = () => api.get("/character");

export const getAllEpisodes = () => api.get("/episode");
