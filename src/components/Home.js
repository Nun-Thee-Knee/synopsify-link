import React from 'react';

export const Home = () => {
  return (
    <div className='h-auto bg-black p-20'>
      <div className='flex left-0 right-0 bg-black flex-wrap justify-center'>
        <div className='flex flex-col justify-center items-start text-white h-auto sm:w-[300px] mr-20 ml-20'>
          <h1 className='text-7xl font-extrabold'>
            <div className='flex flex-wrap w-auto'>
              <span className='text-red-800'>Synopsify</span>
              <span>Link</span>
            </div>
          </h1>
          <p className='text-md mt-10 w-auto'>
            Changed Transforming Complex Video Narratives into Clear and Actionable Text Summaries: Your Link, Your Knowledge Unleashed.
          </p>
          <button className='hover:bg-red-800 text-xl bg-red-950 mt-10 h-10 w-full rounded-xl'>
            <strong>Go to Workspace</strong>
          </button>
          </div>
        <div className='flex justify-center items-center text-white h-auto w-[500px]'>
          <img src="https://static.vecteezy.com/system/resources/previews/009/826/632/non_2x/glossy-youtube-3d-render-icon-free-png.png" alt="" />
        </div>
      </div>
    </div>
  );
};
