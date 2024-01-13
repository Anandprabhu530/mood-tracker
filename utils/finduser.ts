import { auth } from "@clerk/nextjs"
import { prisma } from "./db"

export const finduserbyIb = async () => {
    const { userId } = await auth()
    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId as string,
        }
    })
    return user
}
