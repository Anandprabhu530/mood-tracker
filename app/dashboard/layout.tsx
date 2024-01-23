import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="border-r-[1px] absolute left-0 top-0 h-full w-[350px] ">
        <div className="px-4 py-4 border-b-[1px] border-white">
          <span className="text-4xl">Track your Mood. Optimize your life</span>
        </div>
      </div>
      <div className="ml-[350px] h-full w-[calc(100vw-350px)] ">
        <div className="h-full pt-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
