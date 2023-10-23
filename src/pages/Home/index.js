import { Conteiner, MovieList, Movie } from "./styles";
import { useState, useEffect } from "react";
import { APIKey, TokenApi } from "../../config/key";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //Consumir a Api...

        const fetch = require("node-fetch");
        const url =
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: { TokenApi },
            },
        };
        fetch(url, options)
            .then((res) => res.json())
            .then((json) => setMovies(json))
            .catch((err) => console.error("error:" + err));
        // `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`
    }, []);

    return (
        <Conteiner>
            <h1>Movies</h1>
            <MovieList>
                {movies.map((movies) => {
                    return (
                        <Movie key={movies.id}>
                            <a href="https://www.google.com.br">
                                <img
                                    src={movies.image_Url}
                                    alt={movies.title}
                                />
                            </a>
                            <span>{movies.title}</span>
                        </Movie>
                    );
                })}
            </MovieList>
        </Conteiner>
    );
}
export default Home;
