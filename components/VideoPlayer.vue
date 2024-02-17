<template>
  <div class="relative overflow-auto">
    <iframe
      class="w-full aspect-video h-[50vh] sm:h-[70vh] lg:h-[81vh] bg-slate-800"
      :src="`https://player.vimeo.com/video/${props.videoId}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});
</script>
