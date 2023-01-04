import React from "react";

export function Sidebar(props) {
  console.log(props);
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {props.topAnime.map((anime) => (
          <a href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer">
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
