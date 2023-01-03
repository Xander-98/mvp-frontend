import axios from "axios";
import { useEffect, useState } from "react";
export function AnimeFetch() {
  const [anime, setAnime] = useState();
  const baseURL = "https://kitsu.io/api/edge/anime";
  const fetchAnimes = () => {
    axios.get(`${baseURL}`).then((res) => console.log(res.data));
  };
  useEffect(() => {
    fetchAnimes();
  }, []);
}
