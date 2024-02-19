import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const lessonSelect = Prisma.validator<Prisma.LessonDefaultArgs>()({
  select: {
    title: true,
    slug: true,
    number: true,
    accessCode: true,
  },
});
export type Lesson = Prisma.LessonGetPayload<typeof lessonSelect> & {
  path: string;
};

const chapterSelect = Prisma.validator<Prisma.ChapterDefaultArgs>()({
  select: {
    title: true,
    slug: true,
    number: true,
    lessons: lessonSelect,
  },
});
export type Chapter = Omit<
  Prisma.ChapterGetPayload<typeof chapterSelect>,
  "lessons"
> & {
  lessons: Lesson[];
};

const courseWithChapters = Prisma.validator<Prisma.CourseSelect>()({
  title: true,
  courseBy: true,
  chapters: chapterSelect,
});

const courseSelect = Prisma.validator<Prisma.CourseDefaultArgs>()({
  select: courseWithChapters,
});

export type Course = Omit<
  Prisma.CourseGetPayload<typeof courseSelect>,
  "chapters"
> & {
  chapters: Chapter[];
};

export default defineEventHandler(async (event): Promise<Course> => {
  const { courseSlug } = event.context.params;

  const outline = await prisma.course.findFirst({
    where: {
      slug: courseSlug,
    },
    select: courseWithChapters,
  });

  // Error if there is no course
  if (!outline) {
    throw createError({
      statusCode: 404,
      statusMessage: "Course not found",
    });
  }

  // Map the outline so we can add a path to each lesson
  const chapters = outline.chapters.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/${courseSlug}/${lesson.slug}`,
    })),
  }));

  return {
    ...outline,
    chapters,
  };
});
