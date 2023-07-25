import React, { useState, useEffect } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate ,Link, useParams } from "react-router-dom";

export default function SearchHeader() {
  const {keyword} = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //event 발생했을 때 창이 다시 실행되는 것을 막아줌
    setText("");
    navigate(`/videos/${text}`);
  };
  useEffect(()=>{setText(keyword||'')},[keyword]);
  // 검색창에 현재 useParams를 통해 받아온 keyword가 있다면 keyword로 업데이트 되게 설정

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className='flex items-center'>
        <BsYoutube className='text-4xl text-brand'/>
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-white text-gray-700 rounded-l-3xl"
          // width 7/12 차지할 수 있게
          type="text"
          placeholder="검색"
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4 rounded-r-3xl">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
