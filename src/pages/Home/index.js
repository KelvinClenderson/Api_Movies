import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // Consumir a API...
        const fetch = require("node-fetch");
        const url =
            "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTRjMTBfMjNkNTA4NWZjNmY3N2VlY2VjODZhOGE0YiIsInN1YiI6IjY1MzJlNjY3ZDEzMzI0MDBlMjIxZjc0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LjNAWT9I3B3uR2FrEoPBN7NQSyiUEP0h0x6TXmdKkOY",
            },
        };

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            }); // Atualize o estado com os resultados da API
    }, []);

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map((movie) => (
                    <Movie key={movie.id}>
                        <Link to={`/Details/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <span>{movie.name}</span>
                    </Movie>
                ))}
            </MovieList>
        </Container>
    );
}

export default Home;
