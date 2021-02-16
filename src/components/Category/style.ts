import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
`;

export const CategoryItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 440px));
  grid-gap: 40px;
`
