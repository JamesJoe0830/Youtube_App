import React, { useState, useEffect } from "react";
import { BsYoutube, BsSearch, BsFillMicFill } from "react-icons/bs";
import { BiSolidVideoPlus } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate, Link, useParams } from "react-router-dom";
import { AiOutlineAlert, AiOutlineAndroid } from "react-icons/ai";

export default function SearchHeader() {
  const { keyword } = useParams();
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
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);
  // 검색창에 현재 useParams를 통해 받아온 keyword가 있다면 keyword로 업데이트 되게 설정

  return (
    <header className="fixed w-full m-auto flex p-4 text-xl border-zinc-600 bg-zinc-900 mb-4 z-40">
      <div className="w-full mx-8 flex">
        <button className="px-3 mr-2 hover:bg-zinc-600 rounded-3xl text-xl">
          {" "}
          <CiMenuBurger className=" text-white text-2xl" />{" "}
        </button>
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-4xl text-brand" />
          <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
        </Link>
      
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
          <input
            className="w-6/12 p-2 outline-none border-gray-500 border-2 bg-black text-gray-50 rounded-l-3xl"
            // width 7/12 차지할 수 있게
            type="text"
            placeholder="검색"
            value={text}
            onChange={handleChange}
          />
          <button className="bg-zinc-700 px-4 rounded-r-3xl border-gray-600  hover:bg-zinc-500 border-2">
            <BsSearch />
          </button>
          <button className="bg-zinc-800 ml-3 px-4 hover:bg-zinc-600 rounded-3xl">
            {" "}
            <BsFillMicFill />{" "}
          </button>
        </form>
        <button className="px-3 hover:bg-zinc-600 rounded-3xl">
          {" "}
          <BiSolidVideoPlus className=" text-white text-xl" />{" "}
        </button>
        <button className="px-3 hover:bg-zinc-600 rounded-3xl">
          {" "}
          <AiOutlineAlert className=" text-white text-xl" />{" "}
        </button>
        <button className="ml-2 px-3 bg-lime-600 rounded-3xl">
          {" "}
          <AiOutlineAndroid className=" text-white text-xl" />{" "}
        </button>
        </div>      
    </header>
  );
}
