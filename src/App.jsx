import { useState, useEffect } from "react";
import axios from "axios";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Sidebar } from "./Sidebar";
import { MainAnime } from "./MainAnime";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [otaku, setOtaku] = useState("");

  const getTopAnime = () => {
    axios.get("http://localhost:3000/animes").then((res) => {
      setTopAnime(res.data.data);
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    getAnime(search);
  };

  const getAllOtaku = (user_id) => {
    return axios.get(`http://localhost:3000/favorites/${user_id}`).then((res) => {
      setOtaku(res.data.data);
    });
  };

  const getAnime = (search) => {
    axios.get(`http://localhost:3000/search/${search}`).then((res) => {
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
        <MainAnime
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
          otaku={otaku}
        />
        <Signup />
        <Login />
      </div>
    </div>
  );
}

export default App;
