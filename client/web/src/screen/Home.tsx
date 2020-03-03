import React from "react";

import Modal from "react-modal"

import Nav from "../components/Nav";
import Banner from "../components/Banner";
import SideCate from "../components/SideCate";

const Home = () => {
  return (
    <div className="w-full">
      {/* navbar */}
      <div className="w-full z-10">
        <Nav></Nav>
      </div>
      {/* banner and categories */}
      <a href="" className="w-full text-center text-blue-400 bg-gray-800 p-2 md:inline-block md:mt-2 hidden">
        Categories
      </a>
      <div className="w-full flex md:mt-2" >
        <div style={{ flex: 1}} className="md:hidden mx-4">
          <SideCate />
        </div>
        <div style={{ flex: 4}} className="shadow-md">
          <Banner/>
        </div>
      </div>
    </div>
  );
};

export default Home;