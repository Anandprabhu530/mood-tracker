import { prisma } from "@/utils/db";
import { finduserbyIb } from "@/utils/finduser"
import { NextResponse } from "next/server";

export const POST = async () => {
    const user = await finduserbyIb();
    const entry = await prisma.entries.create({
        data: {
            UserId: user?.id as string,
            content: "Write an article about your day in few lines"
        }
    })
    return NextResponse.json({ data: entry })
}