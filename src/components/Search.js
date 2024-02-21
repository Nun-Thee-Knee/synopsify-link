import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="ml-[430px] p-5 flex space-x-9">
          <center>
          <button className='mr-3 bg-red-800 text-white hover:bg-red-950 rounded-xl h-10 w-10 '>
          <i className="bi bi-search"></i>
        </button>
          <input
            className="text-zinc-200 w-[900px] rounded-xl border-5 border-red-950 focus:border-darkred-800 bg-black px-4 py-2 outline-none"
            placeholder="Search for a link"
            type="text"
          />
          </center>
        </div>
        <div className="ml-[430px] mt-10">
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BZOLxSQwER8?si=vYaIgC7P5vKBrC0a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          
        </center>
        <div className='ml-[320px] mt-10 flex space-x-40'>
        <button className='bg-green-800 text-white hover:bg-green-950 rounded-xl h-10 w-auto p-2'>
      <i className="bi bi-download mr-2"></i>
          Show Transcripts
        </button>
        <button className='bg-green-800 text-white hover:bg-green-950 rounded-xl h-10 w-auto p-2'>
      <i className="bi bi-download mr-2"></i>
          Summarize
        </button>
        </div>
        </div>
    </div>
  )
}

export default Search