import type { Lesson } from "@/server/api/course/[courseSlug].get";

export default async (courseSlug: string, lessonSlug: string) =>
  useFetchWithURL<Lesson>(`/api/course/${courseSlug}/${lessonSlug}`);
