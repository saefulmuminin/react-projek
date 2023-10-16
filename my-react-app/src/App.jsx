import React from 'react';
import './App.css'

function Card() {
  return (
    <div className="w-1/4 p-2">
      <div className="max-w-xs p-3 bg-white border border-gray-200 rounded-lg shadow-md">
        <a href="#">
          <img className="w-full rounded-b-lg" src="https://source.unsplash.com/random/400x300/?galaxy,astronaut" alt="Deskripsi Gambar" />
        </a>
        <div className="p-2">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-1 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300">
            Read more
            <svg className="w-2.5 h-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-wrap -m-4 ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
