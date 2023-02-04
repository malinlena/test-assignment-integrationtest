import { IMovie } from "../../models/Movie";

export async function getData(searchText: string): Promise<IMovie[]> {
  return new Promise((resolve, reject) => {
    if(searchText !== "") {
      resolve([{
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
    } else {
      reject({
        Response: "False",
        Error: "Incorrect IMDb ID."
        });
    }
  });

}