import React from "react";
import AnimeCard from "./AnimeCards";

export function MainAnime(props) {
  return (
    <main>
      <div className="main-head">
        <form style={{}} className="search-box" onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {props.animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default MainAnime;
