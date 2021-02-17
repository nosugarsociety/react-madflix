import React from "react";
import { CategoryList, useMovieListAll } from '../common/api';
import { Category } from '../components/Category';
import { Loading } from '../components/Loading';
import { MainContainer } from '../styles';

const Movies = () => {
  const {
    nowPlaying,
    upComing,
    popular,
    topRated,
    loading,
  } = useMovieListAll();
  
  return (
    <MainContainer>
      Movies    
      {loading ? (
        <Loading />
      ) : (
        <>
          <Category title="Now Playing" lists={nowPlaying as CategoryList} />
          <Category title="Upcoming" lists={upComing as CategoryList} /> 
          <Category title="Popular" lists={popular as CategoryList} /> 
          <Category title="Top Rated" lists={topRated as CategoryList} /> 
        </>
      )}
    </MainContainer>
  )
}

export default Movies;
