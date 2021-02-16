import axios from "axios";
import { useEffect, useState } from "react";

export type MovieCategory =
  | "now_playing"
  | "upcoming"
  | "popular"
  | "top_rated";

export type TvCategory =
  | "airing_today"
  | "on_the_air"
  | "popular"
  | "top_rated";

export type CategoryItem = {
  id: number;
  genre_ids: Array<number>;
  poster_path: string;
  adult: string | null;
  release_date: string;
  title: string;
  overview: string;
  vote_average: number;
};

export type CategoryList = {
  results: CategoryItem[];
  page: number;
  total_pages: number;
  total_items: number;
};

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '2b462456a9f50ac2e96d88c876964382',
    language: 'en-US',
  },
});

export const useMovieList = (category: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {         
        const res = await api.get(`movie/${category}`);
        const result = res.data;
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

  }, [category]);

  return { data, error, loading };
}

export const useMovieListAll = () => {
  const [nowPlaying, setNowPlaying] = useState<CategoryList | null>(null);
  const [upComing, setUpcoming] = useState<CategoryList | null>(null);
  const [popular, setPopular] = useState<CategoryList | null>(null);
  const [topRated, setTopRated] = useState<CategoryList | null>(null);
  const [error, setError] = useState<CategoryList | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const { data: nowPlayingData } = await api.get(`movie/now_playing`);
        const { data: upcomingData } = await api.get(`movie/upcoming`);
        const { data: popularData } = await api.get(`movie/popular`);
        const { data: topRatedData } = await api.get(`movie/top_rated`);

        setNowPlaying(nowPlayingData);
        setUpcoming(upcomingData);
        setTopRated(topRatedData);
        setPopular(popularData);

      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { nowPlaying, upComing, popular, topRated, error, loading };

}

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
