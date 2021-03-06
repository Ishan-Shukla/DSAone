import React from "react";
import AlgoVisualize from "./Components/AlgoVisualize";
import ControllBar from "./Components/ControllBar";
import NavBar from "./Components/NavBar";

const SearchPlayground = () => {
  return (
    <div className="bg-primary-1 min-h-screen max-h-full w-full relative">
      <NavBar />
      <ControllBar />
      <AlgoVisualize />
    </div>
  );
};

export default SearchPlayground;
