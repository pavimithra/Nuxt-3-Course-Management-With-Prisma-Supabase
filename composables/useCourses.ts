import type { Courses } from "@/server/api/courses.get";

export default async () => useFetchWithURL<Courses[]>("/api/courses");
