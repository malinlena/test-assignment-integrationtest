/**
* @jest-environment jsdom 
*/

import { getData } from '../ts/services/movieservice';
import { mockMovies } from '../ts/services/__mocks__/movieservice';

jest.mock('../ts/services/movieservice');

test('should return a list of movies', async () => {
  const searchText = 'hello';

  const data = await getData(searchText);

  expect(data).toEqual(mockMovies)

});