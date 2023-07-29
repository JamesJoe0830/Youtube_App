import axios from "axios";

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then((res) => res.data.items);
//     // fetch(`/videos/${keyword ? "search" : "popular"}.json`)
//     //   .then((res) => res.json())
//     //   .then((data) => data.items);
// }

export default class FakeYoutubeClient {
  async search({ params }) {
    return axios.get(
      `/videos/${params.relatedToVideoId ? 'related' : 'search'}.json`
    );
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }
  async channels() {
    return axios.get("/videos/channel.json");
  }
}
