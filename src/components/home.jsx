import React from "react";
import { useState, useEffect } from "react";
import "../styles/home.css";
import Type from './type';


const home = () => {
  return (
    <div>
      <h1 className="home-heading">Hi There ! </h1>
      <h3 className="home-heading3">I am Abhinav Anand</h3>
      <Type/>
    </div>
  );
};

export default home;
