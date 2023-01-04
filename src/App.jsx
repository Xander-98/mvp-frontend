import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { MainAnime } from "./MainAnime";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState([]);

  const getTopAnime = () => {
    axios.get("https://api.jikan.moe/v4/top/anime?filter=%22bypopularity%22&limit=20").then((res) => {
      console.log(res.data.data);
      setTopAnime(res.data.data);
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    getAnime(search);
  };

  const getAnime = (query) => {
    axios.get(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`).then((res) => {
      console.log(res.data.data);
      setAnimeList(res.data.data);
    });
  };

  useEffect(() => {
    getTopAnime();
  }, []);
  console.log(topAnime);
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainAnime handleSearch={handleSearch} search={search} animeList={animeList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
