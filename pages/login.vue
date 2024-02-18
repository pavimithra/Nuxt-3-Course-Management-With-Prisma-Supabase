<script setup lang="ts">
definePageMeta({
  layout: false,
});
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

const login = async () => {
  const queryParams =
    query.redirectTo !== undefined ? `?redirectTo=${query.redirectTo}` : "";
  const redirectTo = `${window.location.origin}/confirm${queryParams}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo },
  });

  if (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <div class="mx-auto max-w-7xl p-6 sm:p-8 mt-20">
        <NuxtLink to="/">
          <span class="sr-only">Code Mastery</span>
          <img
            class="h-14 sm:h-24 w-auto"
            src="/img/logo.png"
            alt="Code Mastery"
          />
        </NuxtLink>
      </div>
    </header>

    <div class="relative">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div class="p-5">
            <div class="p-5 mt-64 h-screen">
              <button
                class="inline-block rounded-md border border-transparent bg-green-600 px-4 py-3 sm:px-5 sm:py-5 font-medium text-white hover:bg-green-700"
                @click="login"
              >
                Log in with Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
