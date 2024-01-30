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
      <div className="border border-white text-2xl flex items-center justify-center rounded-lg px-4 py-2 w-full h-full cursor-pointer">
        Add New Entry
      </div>
    </div>
  );
};

export default NewEntry;
