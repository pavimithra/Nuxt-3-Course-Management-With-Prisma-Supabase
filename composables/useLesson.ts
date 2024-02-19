import type { LessonWithPath } from "@/types/course";

export default async (courseSlug: string, lessonSlug: string) =>
  useFetchWithURL<LessonWithPath>(`/api/course/${courseSlug}/${lessonSlug}`);
