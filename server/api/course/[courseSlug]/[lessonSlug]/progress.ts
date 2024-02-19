import { PrismaClient } from "@prisma/client";
import protectRoute from "~/server/utils/protectRoute";
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

// Endpoint that updates the progress of a lesson
export default defineEventHandler(async (event) => {
  // Only allow PUT, PATCH, or POST requests
  assertMethod(event, ["PUT", "PATCH", "POST"]);

  // Throw a 401 if there is no user logged in.
  protectRoute(event);

  // Get the route params
  const { lessonSlug } = event.context.params;

  // Get the lesson from the DB
  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
    },
  });

  // If the lesson doesn't exist, throw a 404
  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: "Lesson not found",
    });
  }

  // Get the completed value from the request body and update progress in DB
  // Select based on the chapter and lesson slugs
  const { completed } = await readBody(event);

  // Get user email from the supabase user if there is one.
  const user = await serverSupabaseUser(event);

  return prisma.lessonProgress.upsert({
    where: {
      lessonId_userEmail: {
        lessonId: lesson.id,
        userEmail: user?.email,
      },
    },
    update: {
      completed,
    },
    create: {
      completed,
      userEmail: user?.email,
      Lesson: {
        connect: {
          id: lesson.id,
        },
      },
    },
  });
});
