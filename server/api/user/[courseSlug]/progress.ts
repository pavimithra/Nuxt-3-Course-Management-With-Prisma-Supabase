import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
import protectRoute from "~/server/utils/protectRoute";
import { Chapter, Lesson } from "@/server/api/course/[courseSlug].get";
import { CourseProgress, ChapterProgress } from "~/types/course";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // Throw a 401 if there is no user logged in.
  protectRoute(event);

  // Get user email from the supabase user if there is one.
  const user = await serverSupabaseUser(event);

  const { courseSlug } = event.context.params;

  const userProgress = await prisma.lessonProgress.findMany({
    where: {
      userEmail: user?.email,
      Lesson: {
        Chapter: {
          Course: {
            slug: courseSlug,
          },
        },
      },
    },
    select: {
      completed: true,
      Lesson: {
        select: {
          slug: true,
          Chapter: {
            select: {
              slug: true,
            },
          },
        },
      },
    },
  });

  // Get course outline from meta endpoint
  const courseOutline = await $fetch(`/api/course/${courseSlug}`);

  if (!courseOutline) {
    throw createError({
      statusCode: 404,
      statusMessage: "Course outline not found",
    });
  }

  // Use the course outline and user progress to create a nested object
  // with the progress for each lesson
  const progress = courseOutline.chapters.reduce(
    (courseProgress: CourseProgress, chapter: Chapter) => {
      // Collect the progress for each chapter in the course
      courseProgress[chapter.slug] = chapter.lessons.reduce(
        (chapterProgress: ChapterProgress, lesson: Lesson) => {
          // Collect the progress for each lesson in the chapter
          chapterProgress[lesson.slug] =
            userProgress.find(
              (progress) =>
                progress.Lesson.slug === lesson.slug &&
                progress.Lesson.Chapter.slug === chapter.slug
            )?.completed || false;

          return chapterProgress;
        },
        {}
      );

      return courseProgress;
    },
    {}
  );

  return progress;
});
