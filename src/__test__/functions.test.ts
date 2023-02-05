/**
* @jest-environment jsdom 
*/

import { movieSort } from "../ts/functions";
import { mockMovies }  from "../ts/services/__mocks__/movieservice";


test("should sort movies in descending order", () => {
  const sortedMovies = movieSort(mockMovies);

  expect(sortedMovies.map(movie => movie.Title)).toEqual([ 
    'Ant-Man', 'Hello Mini', 'Hello, My Name Is Doris' ]);
});

test("should sort movies in ascending order", () => {
  const sortedMovies = movieSort(mockMovies, false);

  expect(sortedMovies.map(movie => movie.Title)).toEqual([
  'Hello, My Name Is Doris', 'Hello Mini', 'Ant-Man'
  ]);
});