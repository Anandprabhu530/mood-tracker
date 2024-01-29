import { prisma } from "@/utils/db";
import { finduserbyIb } from "@/utils/finduser";
import HistoryChart from "../components/HistoryChart";

const getdata = async () => {
  const user = await finduserbyIb();
  const allentry = await prisma.analysis.findMany({
    where: {
      userId: user?.id,
    },
  });

  const sum = allentry.reduce((all, current) => all + current.sentiment, 0);
  const average = Math.floor(sum / allentry.length);
  return { allentry, average };
};

const History = async () => {
  const { allentry, average } = await getdata();
  return (
    <div className="h-screen w-full ">
      <div>{`Average Sentiment ${average}`}</div>
      <div className="h-full  w-full ">
        <HistoryChart data={allentry} />
      </div>
    </div>
  );
};

export default History;
