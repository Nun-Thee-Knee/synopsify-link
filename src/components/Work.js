import React, { useState } from "react";
import SideNavbar from "./SideNavbar";

const Work = () => {
    const [display, setDisplay] = useState("hidden");
    const toggleSideBar = () => {
        if (display === "hidden")
        setDisplay("");
        else
        setDisplay("hidden");
    }
  return (
    <>
    <SideNavbar display={display} toggleSideBar={toggleSideBar}/>
    <div className="bg-black text-white h-auto p-10 flex flex-col items-start">
      <div className="flex flex-row items-start mr-10">
        <button onClick={toggleSideBar} className="h-auto w-auto">
          <i className="bi bi-list text-3xl hover:text-red-900 mr-1"></i>
          <p>Saved Work</p> 
        </button>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center h-auto w-auto mx-auto">
        <div className="flex space-x-24">
          <button className="bg-green-800 hover:bg-green-950 rounded-xl p-2">
            <center><i className="bi bi-floppy mr-2"></i>
            Save Work</center>
          </button>
          <button className="bg-red-800 hover:bg-red-950 rounded-xl p-2">
            <center><i className="bi bi-trash3 mr-2"></i>
            Delete</center>
          </button>
          <button className="bg-yellow-800 hover:bg-yellow-950 rounded-xl p-2">
            <center><i className="bi bi-download mr-2"></i>
            Download as a PDF</center>
          </button>
        </div>

        <div className="mt-10 w-full flex items-center">
          <button className="bg-red-800 text-white hover:bg-red-950 rounded-xl p-2">
            <i className="bi bi-search"></i>
          </button>
          <input
            className="ml-2 flex-grow text-zinc-200 rounded-xl border-5 border-red-950 focus:border-darkred-800 bg-black px-4 py-2 outline-none w-full"
            placeholder="Search for a link"
            type="text"
          />
        </div>

        <div className="mt-10 w-full">
          <iframe
            className="h-64 w-full"
            src="https://www.youtube.com/embed/M0lUdywLMQs?si=HqWOZkYhgqvKJL01"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
        <button className='bg-red-800 text-white hover:bg-red-950 rounded-xl h-10 w-auto p-2'>
        <i className="bi bi-card-checklist mr-2"></i>
          Summarize
        </button>
        <div className="h-auto w-full border-red-950 border-[1px] p-5 mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ab corrupti fuga nisi modi dicta incidunt, quisquam eum rerum esse omnis minus enim laudantium, exercitationem aut blanditiis commodi earum non.
        Beatae, ipsum aliquam tempora deleniti tenetur sint iusto repudiandae expedita in qui cupiditate, sunt impedit accusamus voluptatum saepe suscipit ullam veritatis neque maxime necessitatibus a ducimus fugit aspernatur? Repellat, aut!
        Porro recusandae iure exercitationem dolores, non consequatur. Cupiditate ullam aspernatur fugiat suscipit amet quasi neque repellat autem aliquid placeat officiis, ducimus nulla dolor, natus praesentium nam nostrum veniam repudiandae libero?
        Ipsa excepturi minima quae, odio, voluptate, laboriosam porro ullam expedita deleniti sed aliquam. Sint voluptas, pariatur magni totam labore velit voluptatem, officiis ullam dolor eum assumenda, eius sequi quae itaque?
        Sapiente voluptate atque quam eaque, rem perspiciatis! Nam in architecto ad dicta omnis labore delectus dolorem, nisi, magni odio accusamus repellendus voluptates, vel facere. Exercitationem quis quo animi modi perferendis.
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Work;
