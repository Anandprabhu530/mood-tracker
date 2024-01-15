import { prisma } from "@/utils/db";
import { finduserbyIb } from "@/utils/finduser"
import { NextResponse } from "next/server";

export const POST = async () => {
    const user = await finduserbyIb();
    const entry = await prisma.entries.create({
        data: {
            id: user?.id as string,
            content: "Sample Content"
        }
    })
    return NextResponse.json({ data: entry })
}