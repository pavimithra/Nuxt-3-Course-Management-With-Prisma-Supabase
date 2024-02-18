<script setup>
const route = useRoute();
const { courseSlug } = route.params;
const course = await useCourse(courseSlug);
</script>

<template>
  <div class="mx-auto max-w-full">
    <div class="px-4 py-5 sm:px-6 lg:px-8 bg-slate-200">
      <h1 class="text-3xl font-bold font-oswald tracking-tight text-gray-900">
        {{ course.title }}
      </h1>
    </div>
  </div>
  <div class="w-full grow lg:flex">
    <!-- Left sidebar & main wrapper -->

    <div class="shrink-0 lg:w-1/4">
      <nav
        class="lg:h-[81vh] lg:overflow-y-auto border-b border-r border-gray-200"
        aria-label="Directory"
      >
        <header>
          <div class="font-bold text-3xl font-dance py-3 px-4 text-green-800">
            Lessons
          </div>
        </header>
        <div
          v-for="chapter in course.chapters"
          :key="chapter.slug"
          class="relative"
        >
          <div
            class="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-2 text-lg font-semibold leading-6 text-gray-900"
          >
            <h3>{{ chapter.title }}</h3>
          </div>
          <ul role="list" class="divide-y divide-gray-100">
            <li
              v-for="lesson in chapter.lessons"
              :key="lesson.slug"
              class="flex gap-x-4"
            >
              <NuxtLink
                :to="lesson.path"
                activeClass="bg-green-600 text-white"
                class="py-3 px-5 w-full"
              >
                <div class="flex min-w-0">
                  <p class="flex items-center text-sm leading-6">
                    {{ lesson.title }}
                    <p v-if="lesson.accessCode==='Free'" class="ml-5 text-sm font-oswald bg-blue-500 rounded-md px-2 text-white">{{ lesson.accessCode }}</p>
                  </p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <dl class="my-5 grid grid-cols-1 gap-5 p-3">
          <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border border-gray-200"
          >
            <dt class="truncate text-lg font-bold font-oswald text-gray-500">
              Course By
            </dt>
            <dd
              class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
              Alex Fritz
            </dd>
          </div>
          <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border border-gray-200"
          >
            <dd
              class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
              Share
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
