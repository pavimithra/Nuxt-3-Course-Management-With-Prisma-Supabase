import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const coursesSelectWithFeatures = Prisma.validator<Prisma.CourseDefaultArgs>()({
  select: {
    title: true,
    slug: true,
    description: true,
    price: true,
    mostPopular: true,
    features: {
      select: {
        title: true,
      },
    },
  },
});

export type CoursesWithFeatures = Prisma.CourseGetPayload<
  typeof coursesSelectWithFeatures
>;

export default defineEventHandler(async (): Promise<CoursesWithFeatures[]> => {
  const coursesFeatures = await prisma.course.findMany(
    coursesSelectWithFeatures
  );

  // Error if there is no courses
  if (!coursesFeatures) {
    throw createError({
      statusCode: 404,
      statusMessage: "Courses not found",
    });
  }

  return coursesFeatures;
});
