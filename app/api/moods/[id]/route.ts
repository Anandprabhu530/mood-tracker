import { analyze_data } from "@/utils/ai";
import { prisma } from "@/utils/db";
import { finduserbyIb } from "@/utils/finduser"
import { NextResponse } from "next/server";

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

    const analyze = await analyze_data(content)

    const updateddata = await prisma.analysis.upsert({
        where: {
            entryId: entryedit.id
        },
        create: {
            entryId: entryedit.id,
            ...analyze,
        },
        update: { ...analyze }
    })

    return NextResponse.json({ data: { ...analyze, analysis: updateddata } })
}