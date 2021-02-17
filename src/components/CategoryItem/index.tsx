import React from 'react';
import { genreIdLists } from '../../common/variable';
import { Title, GenreLists, GenreList } from './style';

type CategoryItemProps = {
  title: string;
  desc: string;
  posterUrl: string;
  genreIds: Array<number>;
}

const POSTER_PREFIX = 'https://image.tmdb.org/t/p/w500/'

export const CategoryItem = ({
  title,
  desc,
  posterUrl,
  genreIds
}: CategoryItemProps) => {
  return (
    <div>
      <img src={POSTER_PREFIX + `${posterUrl}`} alt={title} />
      <div>
      <Title>{title}</Title>
      <GenreLists>
        {genreIds.map(id => {
            const genre = genreIdLists.find(list => {              
              const movieGenre = list.id === id;
              return movieGenre;
            });
            return (
              <GenreList>{genre && genre.name}</GenreList>
            );
          })
        }        
      </GenreLists>
      </div>
    </div>
  );
}
