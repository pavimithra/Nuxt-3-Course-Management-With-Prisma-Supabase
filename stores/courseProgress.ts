import { defineStore } from "pinia";
import type { CourseProgress } from "~/types/course";

export const useCourseProgress = defineStore("courseProgress", () => {
  // Initialize progress from local storage
  const progress = ref<CourseProgress>({});
  const initialized = ref(false);
  const user = useSupabaseUser();

  async function initialize() {
    if (!user.value) return;

    const {
      params: { courseSlug },
    } = useRoute();

    const { data: userProgress } = await useFetch<CourseProgress>(
      `/api/user/${courseSlug}/progress`,
      { headers: useRequestHeaders(["cookie"]) }
    );

    // Update progress value
    if (userProgress.value) {
      progress.value = userProgress.value;
    }
  }

  const percentageCompleted = computed(() => {
    const chapters = Object.values(progress.value).map((chapter) => {
      const lessons = Object.values(chapter);
      const completedLessons = lessons.filter((lesson) => lesson);
      return Number((completedLessons.length / lessons.length) * 100).toFixed(
        0
      );
    }, []);

    const totalLessons = Object.values(progress.value).reduce(
      (number, chapter) => {
        return number + Object.values(chapter).length;
      },
      0
    );

    const totalCompletedLessons = Object.values(progress.value).reduce(
      (number, chapter) => {
        return (
          number + Object.values(chapter).filter((lesson) => lesson).length
        );
      },
      0
    );

    const course = Number((totalCompletedLessons / totalLessons) * 100).toFixed(
      0
    );

    return {
      chapters,
      course,
    };
  });

  // Toggle the progress of a lesson based on chapter slug and lesson slug
  const toggleComplete = async (
    course: string,
    chapter: string,
    lesson: string
  ) => {
    // If there's no user we can't update the progress
    const user = useSupabaseUser();
    if (!user.value) return;

    // Get the current progress for the lesson
    const currentProgress = progress.value[chapter]?.[lesson];

    // Optimistically update the progress value in the UI
    progress.value[chapter] = {
      ...progress.value[chapter],
      [lesson]: !currentProgress,
    };

    // Update the progress in the DB
    try {
      await $fetch(`/api/course/${course}/${lesson}/progress`, {
        method: "POST",
        // Automatically stringified by ofetch
        body: {
          completed: !currentProgress,
        },
      });
    } catch (error) {
      console.error(error);

      // If the request failed, revert the progress value
      progress.value[chapter] = {
        ...progress.value[chapter],
        [lesson]: currentProgress,
      };
    }
  };

  return {
    initialize,
    progress,
    toggleComplete,
    percentageCompleted,
  };
});
