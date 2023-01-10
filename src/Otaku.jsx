import axios from "axios";
import React from "react";
import { useState } from "react";
const api = `http://localhost:3000/favorites/`;
export function Otaku(Otaku) {
  const [favorite, setFavorite] = useState([]);
  const user = current_user.id;
  axios.get(api + `/` + user.id).then((res) => {
    console.log(res.data.data);
    setFavorite(res.data.data);
  });

  return (
    <div>
      <h1>[favorite.title]</h1>
      <p>[favorite.jpeg.image] </p>
    </div>
  );
}
