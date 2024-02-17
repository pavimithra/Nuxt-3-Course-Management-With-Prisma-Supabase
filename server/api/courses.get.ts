import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const coursesSelect = Prisma.validator<Prisma.CourseDefaultArgs>()({
  select: {
    title: true,
    slug: true,
    firstLessonSlug: true,
  },
});

export type Courses = Prisma.CourseGetPayload<typeof coursesSelect> & {
  path: string;
};

export default defineEventHandler(async (): Promise<Courses[]> => {
  const courses = await prisma.course.findMany(coursesSelect);

  // Error if there is no courses
  if (!courses) {
    throw createError({
      statusCode: 404,
      statusMessage: "Courses not found",
    });
  }

  const coursesWithPath = courses.map((courses) => ({
    ...courses,
    path: `/course/${courses.slug}/${courses.firstLessonSlug}`,
  }));

  return coursesWithPath;
});
