"use client";

import { createNewEntry } from "@/utils/createNewEntry";
import { useRouter } from "next/navigation";

const NewEntry = () => {
  const router = useRouter();
  const handleclick = async () => {
    const data = await createNewEntry();
    router.push(`/dashboard/${data.id}`);
  };

  return (
    <div className="w-full h-full " onClick={handleclick}>
      <div className="border border-black bg-[#77bbbb] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-2xl text-black font-bold flex items-center justify-center rounded-lg px-4 py-2 w-full cursor-pointer h-[25%]">
        <div> Add New Entry</div>
      </div>
    </div>
  );
};

export default NewEntry;
