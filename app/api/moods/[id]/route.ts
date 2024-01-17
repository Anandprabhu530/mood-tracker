import { prisma } from "@/utils/db";
import { finduserbyIb } from "@/utils/finduser"

export const PATCH = async (request: Request, { params }) => {
    const { content } = await request.json();
    const user = await finduserbyIb();
    const entryedit = await prisma.entries.update({
        where: {
            UserId_id: {
                UserId: user?.id as string,
                id: params.id,
            }
        },
        data: {
            content,
        }
    })
}