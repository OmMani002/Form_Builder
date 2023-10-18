"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs"

class UserNotFoundErr extends Error{}

export async function GetFormStats() {
    const user = currentUser();
    if(!user){
        throw new UserNotFoundErr()
    }

    const stats = prisma.form.aggregate({
        where: {
            userId: user.id,
        },
        
        _sum: {
            visits: true,
            submissions: true
        }
    })

    const visitss = (await stats)._sum.visits || 0;
    const submissions = (await stats)._sum.submissions
}