import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const [animeList, setAnimeList] = useState([]);
//   const [topAnime, setTopAnime] = useState([]);
//   const [search, setSearch] = useState("");
//   const [otaku, setOtaku] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();

//     getAnime(search);
//   };

//   const getAllOtaku = (user_id) => {
//     user_id = current_user.id;
//     axios.get(`http://localhost:3000/favorites/${user_id}`).then((res) => {
//       setOtaku(res.data.data);
//     });
//   };

//   const getAnime = (search) => {
//     axios.get(`http://localhost:3000/search/${search}`).then((res) => {
//       setAnimeList(res.data.data);
//     });
//   };

//   return (
//     <div className="App">
//       <div className="content-wrap">
//         <BasicExample />
//         <Sidebar topAnime={topAnime} />
//         <MainAnime
//           handleSearch={handleSearch}
//           search={search}
//           setSearch={setSearch}
//           animeList={animeList}
//           otaku={otaku}
//         />
//         <Signup />
//         <Login />
//         {/* <Otaku getAllOtaku={getAllOtaku} setOtaku={setOtaku} /> */}
//       </div>
//     </div>
//   );
// }
