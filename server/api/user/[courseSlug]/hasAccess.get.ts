import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  const { courseSlug } = event.context.params;

  // No user is logged in
  if (!user) {
    return false;
  }

  const coursePurchases = await prisma.coursePurchase.findMany({
    where: {
      userEmail: user.email,
      verified: true,
      // Hard coded course ID
      Course: {
        slug: courseSlug,
      },
    },
  });

  // This user has purchased the course
  return coursePurchases.length > 0;
});
