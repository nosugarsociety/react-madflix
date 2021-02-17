import styled from "styled-components/macro";

export const Title = styled.h2`
  font-size: 1.125rem;
  line-height: 27px;
  margin-bottom: 0;
`;

export const GenreLists = styled.ul`
  margin-top: 0;
  padding-left: 0;
`;

export const GenreList = styled.li`
  list-style: none;
  display: inline-block;
  font-size: 1.125rem;
  color: #767676;
  margin-right: 7px;  

  &:last-of-type {
    &:after {
      display: none;
    }
  }

  &:after {
    content: "+";
    display: inline;
    margin-left: 5px;
  }
`;
