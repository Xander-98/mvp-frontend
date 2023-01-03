import axios from "axios";
import { useEffect } from "react";
export function AnimeFetch() {
  const fetchData = () => {
    const baseURL = "https://kitsu.io/api/edge/anime";
    axios.get(`${baseURL}`).then((res) => console.log(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
}
