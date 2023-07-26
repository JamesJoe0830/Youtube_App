import axios from 'axios';

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then((res) => res.data.items);
//     // fetch(`/videos/${keyword ? "search" : "popular"}.json`)
//     //   .then((res) => res.json())
//     //   .then((data) => data.items);
// }

export default class Youtube {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},  
            
        })
    }
    // 기본적인 axios instance 만듦 
    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
        // # : private함수이다 : 클래스 내부에서는 호출이 가능하나 외부에서는 호출이 불가능하다.
    }

    async #searchByKeyword(keyword){
        return this.httpClient
        .get('search',{
            params:{
                part:"snippet", 
                maxResults:25,
                type:'video',
                q:keyword,
        }}) 
        .then((res) => res.data.items)
        .then(items => items.map((item)=>({...item, id: item.id.videoId})));

        // search는 id값이 두개이므로 item을 빙글빙글 돌면서 id 값만 id.videoId로 변환해줌
    }

    async #mostPopular(){
        return this.httpClient
            .get('videos',{
                params:{
                    part:"snippet",
                    chart: "mostPopular",
            }}) 
        .then((res) => res.data.items);
    }
}