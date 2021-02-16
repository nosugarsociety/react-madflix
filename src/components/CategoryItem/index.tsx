import React from 'react';

type CategoryItemProps = {
  title: string;
  desc: string;
  posterUrl: string;
}

const POSTER_PREFIX = 'https://image.tmdb.org/t/p/w500/'

export const CategoryItem = ({
  title,
  desc,
  posterUrl,
}: CategoryItemProps) => {
  return (
    <div>
      <img src={POSTER_PREFIX + `${posterUrl}`} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>      
    </div>
  );
}
