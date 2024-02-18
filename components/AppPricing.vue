<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const tiers = await useCoursesWithFeatures();
</script>

<template>
  <div class="bg-gray-100 py-10 sm:py-14">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Course Packages
        </p>
        <p class="pt-6 font-dance text-3xl font-bold text-green-800">
          Buy the course once and it’s yours forever! As we update the course
          you’ll continue to have access to the full course including any
          progressive updates.
        </p>
      </div>

      <div
        class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="(tier, tierIdx) in tiers"
          :key="tier.slug"
          :class="[
            tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
            tierIdx === 0 ? 'lg:rounded-r-none' : '',
            tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
            'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10',
          ]"
        >
          <div>
            <div class="flex items-center justify-between gap-x-4">
              <h3
                :id="tier.slug"
                :class="[
                  tier.mostPopular ? 'text-green-600' : 'text-gray-900',
                  'text-lg font-semibold leading-8',
                ]"
              >
                {{ tier.title }}
              </h3>
              <p
                v-if="tier.mostPopular"
                class="rounded-full bg-green-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-800"
              >
                Most&nbsp;Popular
              </p>
            </div>
            <p class="mt-4 text-sm leading-6 text-gray-600">
              {{ tier.description }}
            </p>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">{{
                tier.price
              }}</span>
              <span class="text-sm font-semibold leading-6 text-gray-600"
                >USD</span
              >
            </p>
            <ul
              role="list"
              class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
            >
              <li
                v-for="feature in tier.features"
                :key="feature.title"
                class="flex gap-x-3"
              >
                <CheckIcon
                  class="h-6 w-5 flex-none text-green-600"
                  aria-hidden="true"
                />
                {{ feature.title }}
              </li>
            </ul>
          </div>
          <a
            href="#"
            :aria-describedby="tier.slug"
            :class="[
              tier.mostPopular
                ? 'bg-green-600 text-white shadow-sm hover:bg-green-700'
                : 'text-green-600 ring-1 ring-inset ring-green-200 hover:ring-green-500',
              'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
            ]"
            >Buy Course</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
