<template>
  <main>
    <!-- Hero -->
    <div class="flex flex-col border-b border-gray-200 lg:border-0">
      <div class="relative">
        <div
          aria-hidden="true"
          class="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
        />
        <div class="relative bg-gray-100 lg:bg-transparent">
          <div
            class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8"
          >
            <div class="mx-auto max-w-2xl py-16 lg:max-w-none lg:py-24">
              <div class="lg:pr-16">
                <h1
                  class="text-4xl font-bold font-dance tracking-tight text-gray-900 sm:text-5xl xl:text-6xl"
                >
                  Laravel Nuxt Blog Course is now completed!
                </h1>
                <p class="mt-4 text-xl text-gray-600">
                  The complete guide to developing and deploying fast,
                  production-ready Nuxt 3 apps.
                </p>
                <div class="mt-6">
                  <a
                    href="#"
                    class="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 font-medium text-white hover:bg-green-700"
                    >Buy the Course</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="h-48 w-full sm:h-72 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2"
        >
          <img
            src="/img/hero.jpg"
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
    <div class="bg-white py-6 sm:py-14">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-4">
            <div
              class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="/img/hype.jpeg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1
                class="mt-2 text-3xl font-bold font-oswald tracking-tight text-gray-900 sm:text-4xl"
              >
                Build awesome websites
              </h1>
              <div class="max-w-xl">
                <p class="mt-6">
                  Learn how to build robust, modern websites with Laravel and
                  Nuxt from scratch. Or improve your website performance, code
                  quality, while making better use of the framework.
                </p>
                <p class="mt-8">
                  Learn the best practises, common pitfalls to avoid, and tons
                  of tips and tricks. Prior experience with Laravel and Nuxt is
                  beneficial but not required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pricing -->
    <AppPricing />
  </main>
</template>
