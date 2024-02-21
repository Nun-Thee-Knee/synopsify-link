import React from "react";
import SideNavbar from "./SideNavbar";
import UpperNavbar from "./UpperNavbar";
import Search from "./Search";

const Workspace = () => {
  return (
    <>
      <div className="bg-black h-[100vh]">
        <SideNavbar />
        <UpperNavbar />
        <Search/>
      </div>
    </>
  );
};

export default Workspace;
