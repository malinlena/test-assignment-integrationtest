jest.mock('../ts/services/movieservice');
import { getData } from '../ts/services/movieservice';

test('should return a list of movies', async () => {
  const searchText = 'hello';

  const data = await getData(searchText);

  expect(data).toEqual([{
    Title: "Hello, My Name Is Doris",
    imdbID: "tt3766394",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg",
    Year: "2015"
  },
  {
    Title: "Hello Mini",
    imdbID: "tt9454892",
    Type: "series",
    Poster: "https://m.media-amazon.com/images/M/MV5BNTFiOTkyNjktZGM1Zi00MDhhLThhYjAtODUwNDVhYzJjOTEwXkEyXkFqcGdeQXVyMTE0Nzg1NjQ2._V1_SX300.jpg",
    Year: "2019–",
  },
])

});