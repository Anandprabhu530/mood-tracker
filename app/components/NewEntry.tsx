"use client";

import React, { useState } from "react";

const NewEntry = () => {
  const [Inputdata, setInputdata] = useState("");
  const handleclick = () => {
    if (Inputdata.length < 20) {
      console.log("Enter more Data");
    }
  };
  return (
    <div className="w-full h-[60%]">
      <textarea
        onChange={(event) => {
          setInputdata(event?.target.value);
        }}
        placeholder="Enter Here.."
        className=" w-[95%] h-full outline-none text-lg p-4 resize-none bg-inherit border border-white rounded-xl m-6 text-white font-poppins placeholder:text-slate-200"
      ></textarea>

      <div className="w-full flex justify-end pr-6">
        <button
          onClick={handleclick}
          className="px-4 rounded-xl bg-[#4a53ff] py-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewEntry;
