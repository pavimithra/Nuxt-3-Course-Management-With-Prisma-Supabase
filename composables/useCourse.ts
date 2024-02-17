import type { Course } from "@/server/api/course/[courseSlug].get";

export default async (courseSlug: string) =>
  useFetchWithURL<Course>(`/api/course/${courseSlug}`);
