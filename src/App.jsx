import { useState, useEffect } from "react";
import axios from "axios";
import { Login } from "./Login";
import { Sidebar } from "./Sidebar";
import { MainAnime } from "./MainAnime";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState("");

  const getTopAnime = () => {
    axios.get("http://localhost:3000/animes").then((res) => {
      setTopAnime(res.data.data);
    });
  };

  // const handlePostFavorite = () => {};

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searched");

    getAnime(search);
  };

  const getAnime = (search) => {
    axios.get(`http://localhost:3000/search/${search}`).then((res) => {
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
        <Login />
      </div>
    </div>
  );
}

export default App;
