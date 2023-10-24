import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Trailers from "./pages/Trailers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/trailers/:id" element={<Trailers />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
