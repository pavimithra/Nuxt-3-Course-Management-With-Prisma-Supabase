<template>
  <div class="w-full">
    <div class="relative overflow-auto w-full border-b border-gray-200">
      <img
        src="https://img.freepik.com/free-vector/dark-black-video-player-template-skin-design_1017-25479.jpg?size=626&ext=jpg&ga=GA1.2.733161484.1707479411&semt=ais"
        class="h-[50vh] sm:h-[70vh] lg:h-[81vh] w-full"
      />
      <!--<VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" />-->
    </div>
    <div class="p-5">
      <p class="text-base font-semibold leading-7 text-indigo-600">
        {{ lesson.videoId }}
      </p>
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-green-600 sm:text-4xl"
      >
        {{ lesson.title }}
      </h1>
      <p class="mt-6 text-xl leading-8 text-gray-700">
        {{ lesson.text }}
      </p>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const { courseSlug, lessonSlug } = route.params;
const lesson = await useLesson(courseSlug, lessonSlug);
</script>
