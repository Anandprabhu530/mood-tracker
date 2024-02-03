"use client";
import { updateEntry } from "@/utils/createNewEntry";
import { useState } from "react";
import { useAutosave } from "react-autosave";

const EntryEditor = ({ entry }) => {
  const [data, setData] = useState(entry.content);
  const [isLoading, setIsloading] = useState(false);
  const [realentry, setRealentry] = useState(
    entry.analysis
      ? entry.analysis
      : {
          mood: "",
          subject: "",
          negative: null,
          summary: "",
        }
  );
  useAutosave({
    data: data,
    onSave: async (_value) => {
      setIsloading(true);
      const newentry = await updateEntry(entry.id, _value);
      setRealentry(newentry);
      setIsloading(false);
    },
  });

  return (
    <div className="w-full h-full flex flex-col text-black">
      <div className="text-4xl pl-8 font-semibold">Your Content</div>

      {isLoading && (
        <div className="absolute top-[5%] grid-none pl-8 text-lg pt-8">
          ...Loading
        </div>
      )}
      <div className="w-full h-full grid grid-cols-3">
        <textarea
          className="bg-[#ffffff] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-black outline-none resize-none text-xl col-span-2 w-full h-[90%] font-poppins m-10 p-8 rounded-xl shadow-xl"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <div className=" ml-[85px] mt-10">
          <div className="flex flex-col shadow-xl bg-[#ffffff] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
            <div className="text-2xl font-semibold pb-8 border-b-[5px] border-[#1e88e6] p-8">
              Analysis of the day
            </div>
            <div className="text-lg p-8 border-b-[5px] border-[#1e88e6]">{`Mood : ${realentry.mood}`}</div>
            <div className="text-lg p-8 border-b-[5px] border-[#1e88e6]">{`Subject : ${realentry.subject}`}</div>
            <div className="text-lg p-8 border-b-[5px] border-[#1e88e6]">
              {`Summary : ${realentry.summary}`}
            </div>
            <div className="text-lg p-8 ">
              Negative : {realentry.negative ? "True" : "False"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryEditor;
