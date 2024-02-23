import { defineStore } from "pinia";

export const useShowPayment = defineStore("showPayment", () => {
  const showPayment = ref(false);

  function toggleShowPayment() {
    showPayment.value = !showPayment.value;
  }

  return { showPayment, toggleShowPayment };
});
