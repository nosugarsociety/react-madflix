import React from 'react';
import { CategoryList } from '../../common/api';
import { CategoryItem } from '../../components/CategoryItem';
import { CategoryItemContainer, Container, Title } from './style';

type CategoryProps = {
  title: string;
  lists: CategoryList
};

export const Category = ({title, lists}: CategoryProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <CategoryItemContainer>
        {lists.results.slice(0, 6).map((item) => {
          return (
            <CategoryItem 
              key={item.id}
              posterUrl={
                item.poster_path
              }
              title={item.title}
              desc={item.overview}
              genreIds={item.genre_ids}
            />
          );      
        })}
      </CategoryItemContainer>
    </Container>
  );
}
