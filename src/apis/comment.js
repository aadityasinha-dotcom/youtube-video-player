import axios from "axios";

const KEY = "AIzaSyAnu0gD6BDrvNSH0tcBXhRfwydKKcbUv6g";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/commentThreads",
  params: {
    part: "snippet, replies",
    maxResults: 3,
    key: KEY,
  },
});
