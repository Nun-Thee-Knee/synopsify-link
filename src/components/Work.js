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
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-2">
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
        <div className="text-white h-auto w-full border-red-950 border-[1px] p-5 mt-10">
        Summary:
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Work;
