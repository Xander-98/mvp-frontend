import React from "react";

export function AnimeCard({ anime }) {
  console.log(anime.images.jpg.image_url, "from card");

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
    </article>
  );
}
export default AnimeCard;
