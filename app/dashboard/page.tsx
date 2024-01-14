import { prisma } from "@/utils/db";
import { finduserbyIb } from "@/utils/finduser";
import NewEntry from "../components/NewEntry";

const getallentry = async () => {
  const user = await finduserbyIb();
  const data = await prisma.entries.findMany({
    where: {
      id: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};

const Dashboard = async () => {
  const entries = await getallentry();

  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="basis-3/5   flex flex-col">
          <div className="  text-4xl p-8">
            Track your Mood. Optimize your life
          </div>
          <div className="text-xl pl-8 py-6">Activity History</div>
          <div className="basis-2/5 flex flex-col rounded-xl bg-[#151515] h-[50%] ml-8">
            Add Notes
            <NewEntry />
          </div>
          <div className="basis-2/5 flex h-[50%] mt-10 ml-8 gap-10">
            <div className="basis-1/2 rounded-xl   h-[90%] bg-[#151515]">
              Charts
            </div>
            <div className="basis-1/2 rounded-xl  h-[90%]  bg-[#151515]">
              Prevoius Notes
            </div>
          </div>
        </div>
        <div className="flex ml-10 flex-col basis-1/2   pt-10">
          <div className="text-2xl flex flex-col basis-1/2">
            <div className="  mb-6">Overall Analysis</div>
            <div className="gap-10 rounded-xl flex h-full w-[95%]">
              <div className="shadow-xl  rounded-xl  bg-[#151515] basis-1/2">
                Index
              </div>
              <div className=" shadow-xl rounded-xl w-[50%]  bg-[#151515]">
                Calendar
              </div>
            </div>
          </div>
          <div className="mt-10 shadow-xl rounded-xl  h-[42%]  bg-[#151515] w-[95%]">
            Total mood analysis
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
