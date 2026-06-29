<template>
  <article class="w-full flex flex-col gap-4 p-4">
    <h1 class="text-2xl font-bold">Project Management</h1>
    <!-- add Project -->
    <div
      class="flex justify-between items-center border border-gray-200 p-4 rounded-lg"
    >
      <h2 class="text-xl font-medium">Project Management</h2>
      <button
        @click="isOpen = true"
        class="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Open Modal
      </button>
      <WorkModal :show="isOpen" @close="isOpen = false" :getWork="getWork">
        <p>This is modal content....</p>
      </WorkModal>
    </div>
    <!-- Table -->
    <div class="overflow-x-auto rounded border border-gray-300 shadow-sm">
      <table class="min-w-full divide-y-2 divide-gray-200">
        <thead class="ltr:text-left rtl:text-right">
          <tr class="*:font-medium *:text-gray-500 bg-gray-500/20">
            <th class="px-3 py-2 whitespace-nowrap">No</th>
            <th class="px-3 py-2 whitespace-nowrap">name</th>
            <th class="px-3 py-2 whitespace-nowrap">position</th>
            <th class="px-3 py-2 whitespace-nowrap">github</th>
            <th class="px-3 py-2 whitespace-nowrap">demo</th>
            <th class="px-3 py-2 whitespace-nowrap">framework</th>
            <th class="px-3 py-2 whitespace-nowrap">description</th>
            <th class="px-3 py-2 whitespace-nowrap">created_at</th>
            <th class="px-3 py-2 whitespace-nowrap text-center">action</th>
          </tr>
        </thead>
        <tbody v-if="todo && todo.data" class="divide-y divide-gray-200">
          <tr
            v-for="(item, index) in todo.data.data"
            :key="item.id"
            class="*:text-gray-900 *:first:font-medium"
          >
            <td class="px-3 py-2 whitespace-nowrap">{{ index + 1 }}</td>
            <td class="px-3 py-2 whitespace-nowrap">{{ item.name }}</td>
            <td class="px-3 py-2 whitespace-nowrap">{{ item.position }}</td>
            <td class="px-3 py-2 whitespace-nowrap">{{ item.github }}</td>
            <td class="px-3 py-2 whitespace-nowrap">{{ item.demo }}</td>
            <td class="px-3 py-2 whitespace-nowrap">{{ item.framework }}</td>
            <td class="px-3 py-2 whitespace-nowrap">{{ item.description }}</td>
            <td class="px-3 py-2 whitespace-nowrap">{{ item.created_at }}</td>
            <td class="text-center">
              <button
                class="text-blue-400 bg-blue-500/20 font-bold border cursor-pointer rounded-2xl"
              >
                view
              </button>
              /
              <button
                class="text-yellow-400 bg-yellow-500/20 font-bold border cursor-pointer"
              >
                Edit
              </button>
              /
              <button
                class="text-red-400 bg-red-500/20 font-bold border cursor-pointer"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
<script setup>
import { onMounted, ref } from "vue";
import WorkModal from "./WorkModal.vue";
import axios from "axios";



const API_URL = "http://localhost:5002/v1";

const todo = ref({});
const isLoading = ref(false);
const errorMessgae = ref();

// fetch work -------------------------------------------
const getWork = async () => {
  try {
    isLoading.value = true;
    const res = await axios.get(`${API_URL}/work`);
    if (res.data.status === true) {
      todo.value = await res.data;
    }
  } catch (error) {
    errorMessgae.value = error.message;
  } finally {
    isLoading.value = false;
  }
};
onMounted(() => {
  getWork();
});
</script>
