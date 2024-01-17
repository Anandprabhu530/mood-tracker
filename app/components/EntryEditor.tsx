"use client";
import { updateEntry } from "@/utils/createNewEntry";
import { useState } from "react";
import { useAutosave } from "react-autosave";

const EntryEditor = ({ entry }) => {
  const [data, setData] = useState(entry.content);
  const [isLoading, setIsloading] = useState(false);
  useAutosave({
    data: data,
    onSave: async (_value) => {
      setIsloading(true);
      await updateEntry(entry.id, _value);
      setIsloading(false);
    },
  });

  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-4xl pb-10 pl-8 border-b-[1px] ">Your Content</div>
      {isLoading && <div className="pl-8 text-lg pt-8">...Loading</div>}
      <div className="w-full h-full grid grid-cols-3">
        <textarea
          className="bg-[#2e2e2e] text-white outline-none resize-none text-xl col-span-2 w-full h-full font-poppins m-8 p-8 rounded-xl shadow-xl"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <div className="cols-span-1 border-l-[1px] flex flex-col">
          <div className="p-8 text-2xl font-semibold">Analysis</div>
          <div>Summary</div>
          <div>Sentiment</div>
          <div>Mood</div>
          <div>Postive or Negative</div>
        </div>
      </div>
    </div>
  );
};

export default EntryEditor;
