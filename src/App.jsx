import { useState, useEffect } from "react";
import axios from "axios";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { MainAnime } from "./MainAnime";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState("");

  const getTopAnime = () => {
    axios.get("https://api.jikan.moe/v4/top/anime?filter=%22bypopularity%22&limit=20").then((res) => {
      setTopAnime(res.data.data);
    });
  };

  const handlePostFavorite = () => {};

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searched");

    getAnime(search);
  };

  const getAnime = (query) => {
    axios.get(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc`).then((res) => {
      console.log(res.data.data, "searched");
      setAnimeList(res.data.data);
    });
  };

  useEffect(() => {
    getTopAnime();
  }, []);
  return (
    <div className="App">
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainAnime handleSearch={handleSearch} search={search} setSearch={setSearch} animeList={animeList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
