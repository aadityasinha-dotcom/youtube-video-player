import axios from "axios";

const KEY = "AIzaSyCDqySC5ZtHDmykg1tDqmTzJEAtMthW4HQ";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/commentThreads",
  params: {
    part: "snippet, replies",
    maxResults: 3,
    key: KEY,
  },
});
