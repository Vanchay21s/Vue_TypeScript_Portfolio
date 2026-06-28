<template>
  <article class="w-full bg-amber-200">
    <div v-if="isLoading">Loading.....</div>
    <div v-else>
      <div v-if="errMessage">{{ errMessage }}</div>
    </div>
    <button @click="refetch">refetch</button>
    <div class="w-full flex gap-3">
      <div
        v-for="(item, index) in educationTodo?.data"
        class="w-1/1 border flex"
      >
        <p>NO: {{ index + 1 }}</p>
        <p>ID: {{ item.id }}</p>
        <p>Name: {{ item.name }}</p>
        <img
          :src="`http://localhost:5002/uploads/${item.logo}`"
          alt="Education Logo"
          class="w-full h-full object-cover rounded"
        />
        <p>ID: {{ item.id }}</p>
        <p>Name: {{ item.name }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useEducation } from "../composables/useEducation";

const { isLoading, errMessage, educationTodo, addEducation, loadEducation } =
  useEducation();

const refetch = async () => {
  await loadEducation();
};

onMounted(() => {
  loadEducation();
});
</script>
