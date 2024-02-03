import { prisma } from "@/utils/db";
import { finduserbyIb } from "@/utils/finduser";
import HistoryChart from "../../components/HistoryChart";

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
    <div className="h-full w-full overflow-hidden">
      <div className="font-bold text-4xl ml-10">{`Average Sentiment Score : ${average}`}</div>
      <div className="h-full w-full">
        <HistoryChart data={allentry} />
      </div>
    </div>
  );
};

export default History;
