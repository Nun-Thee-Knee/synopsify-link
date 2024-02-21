import React from "react";

const SideNavbar = () => {
  return (
    <>
    <button className="hidden sticky">
        <i className="bi bi-list ml-5 text-3xl text-white"></i>
        </button>
    <div
      className=" sidebar fixed top-0 left-0 bottom-0 lg:left-0  w-[400px]
    overflow-y-auto  bg-zinc-800"
    >
      <div className="text-white text-xl text-center">
        <div className="p-2.5 mt-1 flex items-center">
          <img
            className="h-10"
            src="https://static-00.iconduck.com/assets.00/youtube-icon-512x511-qrlabbtf.png"
            alt=""
          />
          <h1 className="font-bold text-white text-[20px] ml-3">
            SynopsifyLink
          </h1>
        </div>
        <hr className="my-2 text-white" />

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
            cursor-pointer text-white"
        >
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-white text-[20px] ml-3 font-extrabold">
              Saved Works
            </span>
            <span className="text-sm rotate-180" id="arrow">
              <i className="bi bi-chevron-down hover:text-red-800"></i>
            </span>
          </div>
        </div>

        <div
          className=" text-left text-sm font-thin mt-2 w-4/5 mx-auto"
          id="submenu"
        >
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
            cursor-pointer hover:text-red-800 text-white"
          >
            <span className="text-[15px]">
              <strong className="font-extrabold">20-02-2024</strong>: Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
              perferendis consequuntur in molestiae veniam totam ipsa quod
              eveniet, velit expedita officia deserunt atque sequi vero nobis,
              enim id praesentium cumque.
            </span>
          </div>
          <hr className="my-2 text-white" />
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
            cursor-pointer hover:text-red-800 text-white"
          >
            <span className="text-[15px]">
              <strong className="font-extrabold">20-02-2024</strong>: Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
              perferendis consequuntur in molestiae veniam totam ipsa quod
              eveniet, velit expedita officia deserunt atque sequi vero nobis,
              enim id praesentium cumque.
            </span>
          </div>
          <hr className="my-2 text-white" />

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
            cursor-pointer hover:text-red-800 text-white"
          >
            <span className="text-[15px]">
              <strong className="font-extrabold">20-02-2024</strong>: Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
              perferendis consequuntur in molestiae veniam totam ipsa quod
              eveniet, velit expedita officia deserunt atque sequi vero nobis,
              enim id praesentium cumque.
            </span>
          </div>
          <hr className="my-2 text-white" />

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
            cursor-pointer hover:text-red-800 text-white"
          >
            <span className="text-[15px]">
              <strong className="font-extrabold">20-02-2024</strong>: Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
              perferendis consequuntur in molestiae veniam totam ipsa quod
              eveniet, velit expedita officia deserunt atque sequi vero nobis,
              enim id praesentium cumque.
            </span>
          </div>
          <hr className="my-2 text-white" />

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
            cursor-pointer hover:text-red-800 text-white"
          >
            <span className="text-[15px]">
              <strong className="font-extrabold">20-02-2024</strong>: Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
              perferendis consequuntur in molestiae veniam totam ipsa quod
              eveniet, velit expedita officia deserunt atque sequi vero nobis,
              enim id praesentium cumque.
            </span>
          </div>
          <hr className="my-2 text-white" />


        </div>
        <div className="bg-zinc-800 sticky bottom-0 mb-0 h-20">
          <button className="h-9 w-28 rounded-xl bg-red-950 hover:bg-red-800 duration-1000 mt-5">Logout</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideNavbar;
