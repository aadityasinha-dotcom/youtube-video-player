import axios from "axios";

const KEY = "AIzaSyAnu0gD6BDrvNSH0tcBXhRfwydKKcbUv6g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 30,
    key: KEY,
  },
});
