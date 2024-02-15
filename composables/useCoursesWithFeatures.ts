import type { CoursesWithFeatures } from "@/server/api/coursesWithFeatures.get";

export default async () =>
  useFetchWithURL<CoursesWithFeatures[]>("/api/coursesWithFeatures");
