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
    <div onClick={handleclick}>
      <div className="border border-white rounded-xl cursor-pointer">
        Add New Entry
      </div>
    </div>
  );
};

export default NewEntry;
