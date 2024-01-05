const Dashboard = () => {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="basis-3/5 border border-white flex flex-col">
          <div className="border-white border text-4xl p-8">
            Track your Mood. Optimize your life
          </div>
          <div className="text-xl pl-8 py-6">Activity History</div>
          <div className="basis-2/5 border border-white rounded-xl bg-[#151515] h-[50%] ml-8">
            Chart
          </div>
          <div className="basis-2/5 flex h-[50%] mt-10 ml-8 gap-10">
            <div className="basis-1/2 rounded-xl border border-white h-[90%] bg-[#151515]">
              Add Notes
            </div>
            <div className="basis-1/2 rounded-xl border h-[90%] border-white bg-[#151515]">
              Prevoius Notes
            </div>
          </div>
        </div>
        <div className="flex ml-10 flex-col basis-1/2 border border-white pt-10">
          <div className="text-2xl flex flex-col basis-1/2">
            <div className="border border-white mb-6">Overall Analysis</div>
            <div className="gap-10 rounded-xl flex h-full w-[95%]">
              <div className="shadow-xl border rounded-xl border-white bg-[#151515] basis-1/2">
                Index
              </div>
              <div className="border shadow-xl rounded-xl w-[50%] border-white bg-[#151515]">
                Calendar
              </div>
            </div>
          </div>
          <div className="mt-10 shadow-xl rounded-xl border h-[42%] border-white bg-[#151515] w-[95%]">
            Analysis
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
