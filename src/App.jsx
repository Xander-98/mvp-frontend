import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { MainAnime } from "./MainAnime";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainAnime />
      </div>
      <Footer />
    </div>
  );
}

export default App;
