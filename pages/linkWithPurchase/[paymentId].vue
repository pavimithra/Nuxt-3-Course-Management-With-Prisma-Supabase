<script setup>
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    const route = useRoute();
    await useFetch(`/api/user/linkWithPurchase/${route.params.paymentId}`, {
      headers: useRequestHeaders(["cookie"]),
    });

    await navigateTo("/", {
      replace: true,
    });
  }
});

const render = () => {};
</script>

<template>
  <div
    class="flex justify-center p-10 text-5xl font-oswald m-10 text-green-600"
  >
    Updating Payment User Info
  </div>
</template>
