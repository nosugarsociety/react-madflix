import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '2b462456a9f50ac2e96d88c876964382',
    language: 'en-US',
  },
});

export const movieApi = {
  getNowPlaying: () => api.get("movie/now_playing"),
  getUpcoming: () => api.get("movie/upcoming"),
  getPopular: () => api.get("movie/popular"),
  getTopRated: () => api.get("movie/top_rated"),
  getDetail: (id: number) => api.get(`movie/${id}`)
}

export const tvApi = {
  getAiringToday: () => api.get("tv/airing_today"),
  getOnTheAir: () => api.get("tv/on_the_air"),
  getPopular: () => api.get("tv/popular"),
  getTopRated: () => api.get("tv/top_rated"),
  getDetail: (id: number) => api.get(`tv/${id}`)
}
