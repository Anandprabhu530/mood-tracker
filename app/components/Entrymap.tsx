const Entrymap = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  const summaryedit = entry.analysis.summary.slice(0, 35);
  return (
    <div className="divide-y divide-black overflow-hidden rounded-xl border border-black shadow text-black bg-[#77bbbb] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="px-4 py-5 ">{date}</div>
      <div className="px-4 py-5 ">{`Summary : ${summaryedit}...`}</div>
      <div className="px-4 py-4 ">{`Mood: ${entry.analysis.mood}`}</div>
    </div>
  );
};

export default Entrymap;
