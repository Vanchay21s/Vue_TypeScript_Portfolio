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

      <WorkModal :show="isOpen" @close="isOpen = false">
        <p>This is modal content.</p>
      </WorkModal>
    </div>
    <!-- Table -->
    <div class="overflow-x-auto rounded border border-gray-300 shadow-sm">
      <table class="min-w-full divide-y-2 divide-gray-200">
        <thead class="ltr:text-left rtl:text-right">
          <tr class="*:font-medium *:text-gray-900">
            <th class="px-3 py-2 whitespace-nowrap">Name</th>
            <th class="px-3 py-2 whitespace-nowrap">DoB</th>
            <th class="px-3 py-2 whitespace-nowrap">Role</th>
            <th class="px-3 py-2 whitespace-nowrap">Salary</th>
            <th class="px-3 py-2 whitespace-nowrap">Action</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
            <td class="px-3 py-2 whitespace-nowrap">04/06/1262</td>
            <td class="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
            <td class="px-3 py-2 whitespace-nowrap">$0</td>
            <td class="px-3 py-2 whitespace-nowrap flex gap-2 bg-amber-200">
              <button class=""></button>
            </td>
          </tr>

          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
            <td class="px-3 py-2 whitespace-nowrap">19/10/1678</td>
            <td class="px-3 py-2 whitespace-nowrap">Vampire Gentleman</td>
            <td class="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>

          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Nadja</td>
            <td class="px-3 py-2 whitespace-nowrap">15/03/1593</td>
            <td class="px-3 py-2 whitespace-nowrap">Vampire Seductress</td>
            <td class="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>

          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
            <td class="px-3 py-2 whitespace-nowrap">01/09/1971</td>
            <td class="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
            <td class="px-3 py-2 whitespace-nowrap">$53,000</td>
          </tr>

          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
            <td class="px-3 py-2 whitespace-nowrap">18/11/1991</td>
            <td class="px-3 py-2 whitespace-nowrap">Familiar/Vampire Hunter</td>
            <td class="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
<script setup>
import { BeakerIcon } from "@heroicons/vue/16/solid";

import { ref } from "vue";
import WorkModal from "./WorkModal.vue";

const isOpen = ref(false);
</script>
