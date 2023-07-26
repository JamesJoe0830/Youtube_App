import axios from 'axios';

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then((res) => res.data.items);
//     // fetch(`/videos/${keyword ? "search" : "popular"}.json`)
//     //   .then((res) => res.json())
//     //   .then((data) => data.items);
// }

export default class FakeYoutube {
    constructor() {

    }
    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword(keyword){
        return axios
        .get("/videos/search.json")
        .then((res) => res.data.items)
        .then(items => items.map((item)=>({...item, id: item.id.videoId})));
        // search는 id값이 두개이므로 item을 빙글빙글 돌면서 id 값만 id.videoId로 변환해줌
    }

    async #mostPopular(){
        return axios
        .get("/videos/popular.json")
        .then((res) => res.data.items);
    }
}