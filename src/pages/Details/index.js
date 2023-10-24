import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";

function Details() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const image_path = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTRjMTBmMjNkNTA4NWZjNmY3N2VlY2VjODZhOGE0YiIsInN1YiI6IjY1MzJlNjY3ZDEzMzI0MDBlMjIxZjc0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LjNAWT9I3B3uR2FrEoPBN7NQSyiUEP0h0x6TXmdKkOY",
            },
        };

        fetch(`https://api.themoviedb.org/3/company/${id}`, options)
            .then((response) => response.json())
            .then((data) => {
                const movieData = {
                    id,
                    title: data.name,
                    overview: data.overview,
                    popularity: data.popularity,
                    avaliação: data.vote_average,
                    image: data.poster_path
                        ? `${image_path}${data.poster_path}`
                        : null,
                    releaseDate: data.first_air_date,
                };
                setMovie(movieData);
            })
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <Container>
            <div className="movie">
                {movie.image && <img src={movie.image} alt={movie.title} />}
            </div>
            <div className="details">
                <h1>{movie.title}</h1>
                <span>Sinopse: {movie.overview}</span>
                <span className="releaseDate">
                    Release Date: {movie.releaseDate}
                </span>
                <span className="avaliacaoCritica">
                    Avaliação Crítica: {movie.avaliação} Popularidade:{" "}
                    {movie.popularity}
                </span>
                <Link to="/">
                    <button>Go Back</button>
                </Link>
                <Link to="/trailers/${id}">
                    <button>Assistir Trailer</button>
                </Link>
            </div>
        </Container>
    );
}

export default Details;
