import type { Lesson } from "@prisma/client";

export type LessonWithPath = Lesson & {
  path: string;
  Chapter: {
    slug: string;
  };
};

export type ChapterProgress = {
  [key: string]: boolean;
};

export type CourseProgress = {
  [key: string]: ChapterProgress;
};
