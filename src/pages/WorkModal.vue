
<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>
    <div class="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Modal Title</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700"> ✕ </button>
      </div>
      <div class="mt-4">
        <slot />
      </div>
      <div class="mt-6 flex justify-end gap-2">
        <button @click="closeModal" class="rounded-lg border px-4 py-2 hover:bg-gray-100">
          Cancel
        </button>
        <button @click="closeModal" class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  show: Boolean,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
