
<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>
    <div class="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Modal Title</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700"> ✕ </button>
      </div>
        <form class="flex flex-col" @submit.prevent="submit">
          <label> Project Name </label>
          <input class="border" v-model="form.name" type="text" placeholder="Portfolio Website" />
          <label> Position </label>
          <input class="border" v-model="form.position" type="text" placeholder="Frontend Developer"/>
          <label> GitHub URL </label>
          <input class="border" v-model="form.github" type="url" placeholder="https://github.com/username/project"/>
          <label> Demo URL </label>
          <input class="border" v-model="form.demo" type="url" placeholder="https://project.com"/>
          <label> Framework / Tech Stack </label>
          <input class="border" v-model="form.framework" type="text" placeholder="Vue 3, Tailwind CSS, Laravel"/>
          <label> Description </label>
          <textarea class="border" v-model="form.description" rows="5" placeholder="Describe your project..."/><br>
          <div class="flex flex-col">
            <button type="submit" class="text-green-400 bg-green-500/20 font-bold border cursor-pointer">Add Project</button>
            <button type="button" @click="closeModal" class="border">Cancel</button>
          </div>
      </form>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  show: Boolean,
  getWork: Function
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
import axios from 'axios';
import { ref } from 'vue';
const form = ref({
  name: "",
  position: "",
  github: "",
  demo: "",
  framework: "",
  description: "",
});

const submit = async () => {
  try{
    const ok = window.confirm("are you sure!!")
    if(!ok) return 
    const res = await axios.post('http://localhost:5002/v1/work', form.value)
    await props.getWork()
    emit("close");
    form.value = {
      name: "",
      position: "",
      github: "",
      demo: "",
      framework: "",
      description: "",
    };
  }catch (err){
    console.error(err.message)
  }finally{
    console.log("still ok")
  }
}
</script>
