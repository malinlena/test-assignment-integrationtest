/**
* @jest-environment jsdom 
*/

import { handleSubmit } from "../ts/movieApp";
import * as movieservice from '../ts/services/movieservice';
import { mockMovies } from '../ts/services/__mocks__/movieservice';
import * as movieApp from '../ts/movieApp';

jest.mock('../ts/services/movieservice');

beforeEach(() => {
  document.body.innerHTML = `
  <form id="searchForm">
    <input type="text" id="searchText" />
    <button type="submit">Search</button>
  </form>
  <div id="movie-container"></div>
  `;
});

describe('handleSubmit', () => {

test('Should display movies in the DOM', async () => {
  const input = document.getElementById('searchText') as HTMLInputElement;
  input.value = 'hello';
  const container = document.getElementById('movie-container') as HTMLDivElement;
  const spy = jest.spyOn(movieservice, 'getData').mockReturnValue(Promise.resolve(mockMovies));

  await handleSubmit();

  const movies = container.querySelectorAll('.movie');
  expect(movies.length).toBe(3);
  expect(container.innerHTML).toContain("Hello, My Name Is Doris");
  expect(container.innerHTML).toContain("Hello Mini");
  expect(container.innerHTML).toContain("Ant-Man");
  expect(spy).toHaveBeenCalled();
});

test('Should display no result in the DOM', async () => {
  const input = document.getElementById('searchText') as HTMLInputElement;
  input.value = 'hello';
  const container = document.getElementById('movie-container') as HTMLDivElement;
  const spy = jest.spyOn(movieservice, 'getData').mockReturnValue(Promise.resolve([]));

  await handleSubmit();

  expect(container.innerHTML).toBe('<p>Inga sökresultat att visa</p>');
  expect(spy).toHaveBeenCalled();

});

test('should display no result in the DOM if request fails', async () => {
  const input = document.getElementById('searchText') as HTMLInputElement;
  input.value = 'hello';
  const container = document.getElementById('movie-container') as HTMLDivElement;
  const spy = jest.spyOn(movieservice, 'getData').mockReturnValue(Promise.reject());

  await handleSubmit();

  expect(container.innerHTML).toBe('<p>Inga sökresultat att visa</p>');
  expect(spy).toHaveBeenCalled();
});

});

test('should submit form', () => {
    const spy = jest.spyOn(movieApp, "handleSubmit")
    const form = document.getElementById('searchForm') as HTMLFormElement;

    movieApp.init();
    form.submit();
    
    expect(spy).toHaveBeenCalled();
});

test('should create html', () => {

  const movies = [{
    Title: 'Hello, My Name Is Doris',
    imdbID: 'tt3766394',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg',
    Year: '2015'
  }
];

const container = document.getElementById('movie-container') as HTMLDivElement;

movieApp.createHtml(movies, container);

expect(container.innerHTML).toContain('Hello, My Name Is Doris');

});

test('should display message if no movies', () => {

  const container = document.getElementById('movie-container') as HTMLDivElement;

  movieApp.displayNoResult(container);

  expect(container.innerHTML).toBe('<p>Inga sökresultat att visa</p>');

});