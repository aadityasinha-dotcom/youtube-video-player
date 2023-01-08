import axios from "axios";

const KEY = "AIzaSyCDqySC5ZtHDmykg1tDqmTzJEAtMthW4HQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 30,
    key: KEY,
  },
});
