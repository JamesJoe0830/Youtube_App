import React from 'react';
import {GoHome} from 'react-icons/go';
import {BiSolidVideos} from 'react-icons/bi';
import {MdOutlineSubscriptions} from 'react-icons/md';

export default function Sidebar() {

    return (
<div class="flex justify-center items-center">
  <section className='fixed flex-col left-0 top-20 ml-10 text-center'>
    <div className='pb-6 flex flex-col items-center hover:cursor-pointer text-xs w-150 h-150  hover:bg-zinc-900'><GoHome className='text-slate-50 text-2xl'/><div className='pt-1'>홈</div></div>
    <div className='pb-6 flex flex-col items-center hover:cursor-pointer text-xs w-150 h-150  hover:bg-zinc-900'><GoHome className='text-slate-50 text-2xl'/><div className='pt-1'>Shorts</div></div>
    <div className='pb-6 flex flex-col items-center hover:cursor-pointer text-xs w-150 h-150  hover:bg-zinc-900'><MdOutlineSubscriptions className='text-slate-50 text-2xl'/><div className='pt-1'>구독</div></div>
    <div className='pb-6 flex flex-col items-center hover:cursor-pointer text-xs w-150 h-150  hover:bg-zinc-900'><BiSolidVideos className='text-slate-50 text-2xl'/><div className='pt-1'>보관함</div></div>
  </section>
</div>
    );
}

