import EntryEditor from "@/app/components/EntryEditor";
import { analyze_data } from "@/utils/ai";
import { prisma } from "@/utils/db";
import { finduserbyIb } from "@/utils/finduser";

const fetchentry = async (id) => {
  const user = await finduserbyIb();
  const entry = await prisma.entries.findUnique({
    where: {
      UserId_id: {
        UserId: user?.id as string,
        id,
      },
    },
  });

  await analyze_data("What is an LLm");
  return entry;
};

const Editingpage = async ({ params }) => {
  const entry = await fetchentry(params.id);
  return (
    <div className="text-white w-full h-full">
      <EntryEditor entry={entry} />
    </div>
  );
};

export default Editingpage;
