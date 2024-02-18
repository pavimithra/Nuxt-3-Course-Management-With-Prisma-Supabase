import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { courseSlug, lessonSlug } = event.context.params;

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
    },
    select: {
      title: true,
      slug: true,
      number: true,
      accessCode: true,
      videoId: true,
      text: true,
    },
  });

  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: "Lesson not found",
    });
  }

  return {
    ...lesson,
    path: `/course/${courseSlug}/${lessonSlug}`,
  };
});
