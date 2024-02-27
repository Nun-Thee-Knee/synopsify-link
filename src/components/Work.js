import React, { useContext, useState } from "react";
import SideNavbar from "./SideNavbar";
import WorkContext from "../context/WorkContext";

const Work = () => {
  const context = useContext(WorkContext);
  const [ytLink, setytLink] = useState("");
  const {
    saveAsPDF,
    title,
    link,
    summary,
    getSummary,
    changeSummary,
    clearPage,
    saveWork,
    getWork,
  } = context;
  const [display, setDisplay] = useState("hidden");
  const toggleSideBar = () => {
    if (display === "hidden") setDisplay("");
    else setDisplay("hidden");
  };
  const getLink = async (e) => {
    setytLink(e.target.value);
    // getSummary(e.target.value)
  };

  const search = (e) => {
    getSummary(ytLink);
    setytLink("");
  };
  return (
    <>
      <SideNavbar display={display} toggleSideBar={toggleSideBar} />
      <div className="bg-black text-white h-auto p-10 flex flex-col items-start">
        <div className="flex flex-row items-start mr-10">
          <button
            onClick={() => {
              toggleSideBar();
              getWork();
            }}
            className="h-auto w-auto"
          >
            <i className="bi bi-list text-3xl hover:text-red-900 mr-1"></i>
            <p>Saved Work</p>
          </button>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center h-auto w-auto mx-auto">
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-2">
            <button
              onClick={() => {
                saveWork();
              }}
              className={`${
                summary === ""
                  ? "bg-green-950 cursor-default"
                  : "bg-green-800 hover:bg-green-950"
              } rounded-xl p-2`}
            >
              <center>
                <i className="bi bi-floppy mr-2"></i>
                Save Work
              </center>
            </button>
            <button
              onClick={() => {
                summary !== "" && clearPage();
              }}
              className={`${
                summary === ""
                  ? "bg-red-950 cursor-default"
                  : "bg-red-800 hover:bg-red-950"
              } rounded-xl p-2`}
            >
              <center>
                <i className="bi bi-trash3 mr-2"></i>
                Delete
              </center>
            </button>
            <button
              onClick={() => {
                summary !== "" && saveAsPDF();
              }}
              className={`${
                summary === ""
                  ? "bg-yellow-950 cursor-default"
                  : "bg-yellow-800 hover:bg-yellow-950"
              } rounded-xl p-2`}
            >
              <center>
                <i className="bi bi-download mr-2"></i>
                Download as a PDF
              </center>
            </button>
          </div>

          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              ytLink !== "" && search();
            }}
          >
            <div className="mt-10 w-full flex items-center">
              <button
                type="submit"
                className="bg-red-800 text-white hover:bg-red-950 rounded-xl p-2"
              >
                <i className="bi bi-search"></i>
              </button>
              <input
                onChange={getLink}
                className="ml-2 flex-grow text-zinc-200 rounded-xl border-5 border-red-950 focus:border-darkred-800 bg-black px-4 py-2 outline-none w-full"
                placeholder="Search for a link"
                type="url"
                name="YTlink"
                id="YTlink"
                value={ytLink}
              />
            </div>
          </form>

          <div className="mt-10 w-full">
            <a
              href={link}
              className="text-xl hover:text-red-800 duration-300 justify-center flex items-center"
            >
              {link}
            </a>
          </div>
          <div className={`mt-14 flex flex-col justify-center items-center`}>
            <button
              onClick={() => {
                link !== "" && changeSummary();
              }}
              className={`${
                link === ""
                  ? "bg-red-950 cursor-default"
                  : "bg-red-800 hover:bg-red-950"
              } text-white rounded-xl h-10 w-auto p-2`}
            >
              <i className="bi bi-card-checklist mr-2"></i>
              Summarize
            </button>
            <div
              className={`${
                summary !== "" ? "border-red-950 border-[1px] rounded-xl" : ""
              } text-white h-auto w-full  p-5 mt-10 `}
            >
              <center>
                <h1 className="text-2xl font-extrabold">{title}</h1>
                <br />
                {summary}
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
