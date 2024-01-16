import EntryEditor from "@/app/components/EntryEditor";
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
  return entry;
};

const Editingpage = async ({ params }) => {
  const entry = await fetchentry(params.id);
  return (
    <div className="text-white">
      <EntryEditor entry={entry} />
    </div>
  );
};

export default Editingpage;
