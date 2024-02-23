import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { lessonSlug } = event.context.params;

  const lesson = await prisma.lesson.findMany({
    where: {
      slug: lessonSlug,
      accessCode: "Free",
    },
  });

  return lesson.length > 0;
});
