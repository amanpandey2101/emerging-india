import React from 'react'
import { Link } from 'react-router-dom';
export default function ArtsNav() {
  return (
        <>
    
    <div className='ml-20 max-[1230px]:visually-hidden '>
    <aside className="w-full pt-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 h-full absolute top-[6rem] rounded-md ">
	<nav className="space-y-8  cursor-pointer">
		<div className="space-y-3">
			<h2 className="text-xl font-semibold tracking-widest uppercase text-black border-solid border-black border-b-2">Evolved Indian Arts</h2>
			<h2 className=" font-semibold tracking-widest uppercase dark:text-gray-400  hover:underline text-xl hover:text-blue-500"><Link to ='/paintings'>Paintings</Link></h2>
			<div className="flex flex-col space-y-1 font-bold ">
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#madhubani">Madhubani Paintings</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#bhil">Bhil Paintings</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#pattachitra">Pattachitra artwork</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#warli">Warli artform</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#mandana">Mandana Paintings</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#phad">Phad painting</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#miniature">Miniature Painting</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#kalighat">Kalighat Painting</a>
			</div>
		</div>
		<div className="space-y-2 font-bold ">
			<h2 className="text-xl font-semibold tracking-widest uppercase dark:text-gray-400 hover:underline border-solid border-black border-t-2 pt-4 hover:text-blue-500"><a href='/music'>Music</a></h2>
			<div className="flex flex-col space-y-1 ">
				<a href='#classical' className='hover:underline hover:text-blue-500' rel="noopener noreferrer" >Indian Classical Music</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#folk">Indian Folk Music</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="#pop">Indian Pop Music</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="/">Indian Hip Hop</a>
			</div>
		</div>
		<div className="space-y-2 font-bold ">
			<h2 className="font-semibold tracking-widest uppercase dark:text-gray-400 text-xl border-solid border-black border-t-2 pt-4">Sculptures</h2>
			<div className="flex flex-col space-y-1">
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="/">Tutorials</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="/">Changelog</a>
			</div>
		</div>
		<div className="space-y-2 font-bold">
			<h2 className="text-xl tracking-widest uppercase dark:text-gray-400 border-solid border-black border-t-2 pt-4">Architecture</h2>
			<div className="flex flex-col space-y-1">
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="/">Tutorials</a>
				<a className='hover:underline hover:text-blue-500' rel="noopener noreferrer" href="/">Changelog</a>
			</div>
		</div>
	</nav>
</aside>
</div>
    </>
  );
}