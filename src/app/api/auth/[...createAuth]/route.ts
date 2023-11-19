import { AuthOptions } from "next-auth";

// Prisma
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from "@/lib/prismadb";

export const authOptions : AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[]
}