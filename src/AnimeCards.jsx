import React from "react";
import axios from "axios";
import { ReactDOM } from "react";

export function AnimeCard({ anime }) {
  const handleOtaku = () => {
    axios.post("http://localhost:3000/otaku", { anime_id: anime.mal_id });
    console.log("Favorited");
  };

  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.images.jpg.image_url} alt="Anime Image" />
        </figure>
        <div id="anime-title">
          <h3>{anime.title}</h3>
        </div>
      </a>
      <button
        className="btn-size"
        type="button"
        onClick={handleOtaku}
        style={{ width: "75px", margin: "2px", backgroundColor: "transparent", textAlign: "center" }}
      >
        <img
          src="https://png.pngitem.com/pimgs/s/183-1830149_pokeball-pixel-png-pokeball-pixel-art-gif-transparent.png"
          alt="button image"
          style={{ margin: "auto", position: "center", width: "100%", height: "100%" }}
        />
      </button>
    </article>
  );
}
export default AnimeCard;
