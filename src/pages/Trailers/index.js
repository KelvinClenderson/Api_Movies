import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";

function Trailers() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const image_path = "https://image.tmdb.org/t/p/w500";

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTRjMTBmMjNkNTA4NWZjNmY3N2VlY2VjODZhOGE0YiIsInN1YiI6IjY1MzJlNjY3ZDEzMzI0MDBlMjIxZjc0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LjNAWT9I3B3uR2FrEoPBN7NQSyiUEP0h0x6TXmdKkOY",
        },
    };

    fetch(
        "https://api.themoviedb.org/3/movie/${id}/videos?language=en-US",
        options
    )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
}
export default Trailers;
