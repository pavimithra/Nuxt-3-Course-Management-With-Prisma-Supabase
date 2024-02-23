<script setup>
import { useCourseProgress } from "@/stores/courseProgress.ts";

definePageMeta({
  middleware: ["auth"],
});

const route = useRoute();
const user = useSupabaseUser();
const { courseSlug, lessonSlug } = route.params;
const lesson = await useLesson(courseSlug, lessonSlug);
const store = useCourseProgress();
const { initialize, toggleComplete } = store;

await initialize();

const chapterSlug = computed(() => {
  return `${lesson?.value.Chapter.slug}`;
});

const isProgressAvailable = computed(() => {
  return store.progress;
});

// Check if the current lesson is completed
const isCompleted = computed(() => {
  return (
    store.progress?.[`${lesson?.value.Chapter.slug}`]?.[lessonSlug] || false
  );
});
</script>

<template>
  <div class="w-full">
    <div class="relative overflow-auto w-full border-b border-gray-200">
      <!-- <img
        src="https://img.freepik.com/free-vector/dark-black-video-player-template-skin-design_1017-25479.jpg?size=626&ext=jpg&ga=GA1.2.733161484.1707479411&semt=ais"
        class="h-[50vh] sm:h-[70vh] lg:h-[81vh] w-full"
      /> -->
      <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" />
    </div>
    <div class="p-5">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-green-600 sm:text-4xl"
      >
        {{ lesson.title }}
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-700">
        {{ lesson.text }}
      </p>
      <LessonCompleteButton
        v-if="user"
        :model-value="isCompleted"
        @update:model-value="
          toggleComplete(courseSlug, chapterSlug, lessonSlug)
        "
      />
    </div>
  </div>
</template>
