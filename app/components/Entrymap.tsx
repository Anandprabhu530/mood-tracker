const Entrymap = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-black border border-white shadow text-white">
      <div className="px-4 py-5 ">{date}</div>
      <div className="px-4 py-5 ">{`Summary : ${entry.analysis.summary}`}</div>
      <div className="px-4 py-4 ">{`Mood: ${entry.analysis.mood}`}</div>
    </div>
  );
};

export default Entrymap;
