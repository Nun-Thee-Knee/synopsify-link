import React from 'react'

export const Home = () => {
  return (
    <div className='h-auto bg-black'>
        <div className='flex p-20 bg-black flex-wrap space-x-32 justify-center'>
            <div className='flex flex-col justify-center items-start text-white  h-[400px] w-auto'>
              <h1 className='text-7xl font-extrabold'><span className='text-red-800'>Synopsify</span>Link</h1>
              <p className='text-xl mt-10 w-96'>Transforming Complex Video Narratives into Clear and Actionable Text Summaries: Your Link, Your Knowledge Unleashed.</p>
              <button className='hover:bg-red-800 text-xl bg-red-950 mt-10 h-10 w-full rounded-xl'><strong>Go to Workspace</strong></button>
              </div>
            <div className='flex justify-center items-center text-white h-[400px] w-[500px]'>
                <center>
                <img className='shadow-2xl w-auto h-96 scale-x-[-1]' src="https://static.vecteezy.com/system/resources/previews/009/826/633/non_2x/youtube-3d-render-icon-free-png.png" alt="" />
            
                </center>
                </div>
        </div>
    </div>
  )
}
