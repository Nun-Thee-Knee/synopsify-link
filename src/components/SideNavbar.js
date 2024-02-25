import React, {useContext} from "react";
import WorkContext from "../context/WorkContext";
import { auth } from "../config/firebase";
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";

const SideNavbar = (props) => {
  const navigate = useNavigate();
  const Logout = async(e) => {
    try{
      await signOut(auth);
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }
  const context = useContext(WorkContext);
  const { work, showPage, clearPage} = context;
  console.log(work);
  return (
    <>
    <div
      className={`${props.display} sidebar fixed top-0 left-0 bottom-0 lg:left-0  w-[400px] overflow-y-auto  bg-zinc-800`}
    >
      <div className="text-white text-xl text-center">
        <div className="p-2.5 mt-1 flex items-center">
          <img
            className="h-10"
            src="https://st.depositphotos.com/1575949/2559/v/450/depositphotos_25599809-stock-illustration-play-icon-on-red-glossy.jpg"
            alt=""
          />
          <h1 className="font-bold text-white text-[20px] ml-3">
            SynopsifyLink
          </h1>
          <button onClick={()=>{props.toggleSideBar()}} className="ml-40">
          <i className="bi bi-x-lg hover:text-red-900"></i>
          </button>
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
          
          {work.map((elem)=>{
            return <><div
            onClick={()=>{showPage(elem); props.toggleSideBar()}}
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
            cursor-pointer hover:text-red-800 text-white"
          >
            <span className="text-[15px]">
              <strong className="font-extrabold">{elem['date']}: </strong>
              {elem['title']}
            </span>
          </div>
          <hr className="my-2 text-white" />
          </>
          })}

        </div>
        <div className="bg-zinc-800 sticky bottom-0 mb-0 h-20 flex flex-wrap space-x-2 justify-center items-center">
          <button onClick={Logout} className="h-9 w-28 rounded-xl bg-red-950 hover:bg-red-800 duration-1000 mt-5">Logout</button>
          <button onClick={()=>{clearPage()}} className="h-9 w-28 rounded-xl bg-red-950 hover:bg-red-800 duration-1000 mt-5">New</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideNavbar;
