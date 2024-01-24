import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/history", label: "History" },
  ];
  return (
    <div className="w-screen h-screen">
      <div className="border-r-[1px] absolute left-0 top-0 h-full w-[350px] flex flex-col">
        <div className="px-4 py-4 border-b-[1px] border-white">
          <span className="text-4xl">Track your Mood. Optimize your life</span>
        </div>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="p-4 text-xl border-b-[1px]"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="ml-[350px] h-full w-[calc(100vw-350px)] ">
        <div className="h-full pt-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
