import React from 'react';
import { CategoryList } from '../../common/api';
import { Container, Title } from './style';

type CategoryProps = {
  title: string;
  lists: CategoryList
};

export const Category = ({title, lists}: CategoryProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {lists.results.slice(0, 6).map((item) => (
        <span key={item.id}>{item.title}</span>
      ))}
    </Container>
  );
}

