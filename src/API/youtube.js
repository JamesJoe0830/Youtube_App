// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then((res) => res.data.items);
//     // fetch(`/videos/${keyword ? "search" : "popular"}.json`)
//     //   .then((res) => res.json())
//     //   .then((data) => data.items);
// }
export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  // 기본적인 axios instance 만듦
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
     // # : private함수이다 : 클래스 내부에서는 호출이 가능하나 외부에서는 호출이 불가능하다.
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
 // search는 id값이 두개이므로 item을 빙글빙글 돌면서 id 값만 id.videoId로 변환해줌
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
